import { useEvent, useScene } from 'phaser-react-ui';
import React, { useMemo, useState } from 'react';

import { Item } from './item';

import { GameScene } from '~game/types';
import { PlayerSuperskill, PlayerEvent } from '~scene/world/entities/player/types';
import type { IWorld } from '~scene/world/types';

import { Wrapper } from './styles';

export const Superskills: React.FC = () => {
  const world = useScene<IWorld>(GameScene.WORLD);

  const superskills = useMemo(() => (
    Object.keys(PlayerSuperskill) as PlayerSuperskill[]
  ), []);

  const [allow, setAllow] = useState(() => (
    Object.keys(world.player.unlockedSuperskills).length > 0
  ));

  useEvent(world.player, PlayerEvent.UNLOCK_SUPERSKILL, () => {
    setAllow(true);
  }, []);

  return allow && (
    <Wrapper>
      {superskills.map((superskill) => (
        <Item key={superskill} type={superskill} />
      ))}
    </Wrapper>
  );
};
