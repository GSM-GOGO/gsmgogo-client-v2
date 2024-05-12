import * as S from './style.ts';

import { NotFound } from '@/assets';

const Notfound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <NotFound />
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default Notfound;
