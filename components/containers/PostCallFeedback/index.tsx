import * as React from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';

import Illustration from '@assets/illustrations/feedbackIllustration.svg';
import { Box } from '@components/layout/Box';
import { Button } from '@components/common/Button';
import { Heading } from '@components/common/Heading';
import { Text } from '@components/common/Text';
import { TextArea } from '@components/common/TextArea';
import { Spacer } from '@components/layout/Spacer';
import { Slider } from '@components/common/Slider';

const SliderScaleNumbers = () => {
  return (
    <Box
      flex
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '98%',
        margin: '0 auto',
        position: 'relative',
        left: '6px',
      }}
    >
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
      <Text>6</Text>
      <Text>7</Text>
      <Text>8</Text>
      <Text>9</Text>
      <Text>10</Text>
    </Box>
  );
};

const PostCallFeedBack = () => {
  const router = useRouter();

  return (
    <>
      <S.Background>
        <S.DialogBoxWrapper>
          <S.FormWrapper>
            <Heading as="h1">
              Nos ajuda a melhorar a melhorar a experiência, pleeease? <span>😁</span>
            </Heading>
            <Spacer size={4} />
            <Text as="p" fontSize="xs">
              Em uma escala de 0 a 10, qual a chance de você indicar para alguém?
            </Text>
            <Spacer size={16} />
            <SliderScaleNumbers />
            <Spacer size={4} />
            <Slider defaultValue={[1]} min={1} max={10} />
            <Spacer size={32} />
            <Text as="p">Qual o motivo da sua nota?</Text>
            <Spacer size={16} />
            <TextArea name="feedback-text" label="Digite aqui" isLabelVisible={false} />
            <Spacer size={32} />
            <Button type="submit">Enviar Resposta</Button>
            <Spacer size={16} />
            <Button
              type="button"
              textColor="orange1"
              backgroundColor="gray6"
              style={{ border: 'solid 2px var(--colors-orange1)' }}
              onClick={() => router.push('/')}
            >
              Retornar ao lobby
            </Button>
          </S.FormWrapper>
          <Spacer size={32} />
          <S.IllustrationWrapper>
            <Illustration />
          </S.IllustrationWrapper>
        </S.DialogBoxWrapper>
      </S.Background>
    </>
  );
};

export default PostCallFeedBack;
