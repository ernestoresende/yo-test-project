import * as React from 'react';
import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';

import * as S from './styled';
import { Context } from '@store/GlobalStateProvider';

import { Dialog, DialogClose, DialogTrigger, DialogContent } from '@components/common/Dialog';
import { SettingsSwitch } from '@components/config/ConfigButtons';
import { Box } from '@components/layout/Box';
import { Spacer } from '@components/layout/Spacer';
import { Spinner } from '@components/common/Spinner';
import { Button } from '@components/common/Button';

import { BiCamera, BiSpeaker, BiMicrophone } from 'react-icons/bi';

export const ConfigDialog = React.forwardRef<HTMLDivElement>(({ ...props }, componentRef) => {
  const { globalState, globalDispatch } = React.useContext(Context);

  const { register, handleSubmit } = useForm();
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [videoInputDevices, setVideoInputDevices] = React.useState<any[]>();
  const [audioInputDevices, setAudioInputDevices] = React.useState<any[]>();
  const [audioOutputDevices, setAudioOutputDevices] = React.useState<any[]>();

  const mediaDevices = globalState.userMediaDevices;

  const SelectContainer = ({
    register,
    iconComponent,
    selectName,
    mediaDevices,
  }: {
    register: UseFormRegister<FieldValues>;
    iconComponent: React.ReactNode;
    selectName: string;
    mediaDevices: any;
  }) => {
    const deviceArray: any[] = Object.values(mediaDevices);
    return (
      <S.SelectWrapper>
        {iconComponent}
        <Spacer size={24} />
        <S.SelectComponent {...register(selectName)}>
          {deviceArray.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </S.SelectComponent>
        <Spacer size={16} />
      </S.SelectWrapper>
    );
  };

  React.useEffect(() => {
    if (!mediaDevices.videoInputs && !mediaDevices.audioInputs && !mediaDevices.audioOutputs) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setVideoInputDevices(Object.values(mediaDevices.videoInputs));
      setAudioInputDevices(Object.values(mediaDevices.audioInputs));
      setAudioOutputDevices(Object.values(mediaDevices.audioOutputs));
    }
  }, [mediaDevices]);

  async function submitDeviceIds(data) {
    const { audioInputDevices, audioOutputDevices, videoInputDevices } = data;
    await globalDispatch({ type: 'SET_VIDEO_INPUT_DEVICE', payload: videoInputDevices });
    await globalDispatch({ type: 'SET_AUDIO_INPUT_DEVICE', payload: audioInputDevices });
    await globalDispatch({ type: 'SET_AUDIO_OUTPUT_DEVICE', payload: audioOutputDevices });
  }

  async function onSubmit(data) {
    await submitDeviceIds(data);
  }

  return (
    <Dialog onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
      <DialogTrigger asChild>
        <SettingsSwitch />
      </DialogTrigger>
      <DialogContent>
        {isLoading ? (
          <Box flex center style={{ height: '210px' }}>
            <Spinner size={48} />
          </Box>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box flex center direction="column">
              <SelectContainer
                iconComponent={<BiCamera />}
                selectName="videoInputDevices"
                mediaDevices={videoInputDevices}
                register={register}
              />
              <Spacer size={32} />
              <SelectContainer
                iconComponent={<BiMicrophone />}
                selectName="audioInputDevices"
                mediaDevices={audioInputDevices}
                register={register}
              />
              <Spacer size={32} />
              <SelectContainer
                iconComponent={<BiSpeaker />}
                selectName="audioOutputDevices"
                mediaDevices={audioOutputDevices}
                register={register}
              />
            </Box>
            <Spacer size={48} />
            <Box flex center>
              <Button style={{ width: 'initial' }} backgroundColor="violet2" type="submit">
                Salvar
              </Button>
            </Box>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
});
