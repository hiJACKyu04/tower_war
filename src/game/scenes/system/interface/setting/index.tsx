import React from 'react';

import { phrase } from '~core/lang';
import type { LangPhrase } from '~core/lang/types';

import { Wrapper, Label, Values, Value } from './styles';

type Props = {
  label: LangPhrase
  values: (string | {
    value: string
    color?: string
  })[]
  currentValue?: string
  onChange: (value: any) => void
};

export const Setting: React.FC<Props> = ({
  label,
  values,
  currentValue,
  onChange,
}) => (
  <Wrapper>
    <Label>{phrase(label)}</Label>
    <Values>
      {values.map((item) => {
        const value = typeof item === 'string' ? item : item.value;
        const color = typeof item === 'string' ? undefined : item.color;

        return (
          <Value
            key={value}
            onClick={() => onChange(value)}
            $active={currentValue === value}
            $color={color}
          >
            {phrase(value as any)}
          </Value>
        );
      })}
    </Values>
  </Wrapper>
);
