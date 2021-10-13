import * as React from 'react';
import { ConfigButton } from '@components/common/ConfigButton';
import { BiCamera, BiCameraOff, BiMicrophone, BiMicrophoneOff } from 'react-icons/bi';
import { IoSettingsOutline, IoCall } from 'react-icons/io5';

const styleProps = {
  backgroundColor: 'blueGray6',
  iconColor: 'blueGray1',
};

const CameraSwitchButton = ({ isActive, ...props }) => {
  return (
    <ConfigButton
      name={isActive ? 'Desligar câmera' : 'Ligar câmera'}
      icon={isActive ? <BiCameraOff /> : <BiCamera />}
      {...styleProps}
      {...props}
    />
  );
};

const MicSwitchButton = ({ isActive, ...props }) => {
  return (
    <ConfigButton
      name={isActive ? 'Desligar Microfone' : 'Ligar Microfone'}
      icon={isActive ? <BiMicrophoneOff /> : <BiMicrophone />}
      {...styleProps}
      {...props}
    />
  );
};

const ConfigSwitchButton = ({ ...props }) => {
  return (
    <ConfigButton name="Configurações" icon={<IoSettingsOutline />} {...styleProps} {...props} />
  );
};

const ExitCallButton = ({ ...props }) => {
  return (
    <ConfigButton
      name="Sair da chamada"
      icon={<IoCall />}
      backgroundColor="orange1"
      iconColor="gray6"
      {...props}
    />
  );
};

export const CameraSwitch = CameraSwitchButton;
export const MicSwitch = MicSwitchButton;
export const SettingsSwitch = ConfigSwitchButton;
export const ExitCall = ExitCallButton;
