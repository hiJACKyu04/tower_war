import React from 'react';

import pkg from '~game/../../package.json';

import imageDiscord from './images/discord.png';

import { Wrapper, Icon, About, Discord, Author, Link } from './styles';

export const Copyright: React.FC = () => (
  <Wrapper>
    <About>
      <Author>
        Created by{' '}
        <Link href={pkg.author.url} target="_blank">
          {pkg.author.name}
        </Link>
      </Author>
      Version {pkg.version}
    </About>
    <Discord href='https://discord.gg/aRE4uFeaW8' target="_blank">
      <Icon src={imageDiscord} />
      DISCORD
    </Discord>
  </Wrapper>
);
