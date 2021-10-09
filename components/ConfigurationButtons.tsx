import * as React from 'react';
import { ConfigButton } from '@components/primitives/ConfigButton';
import { BiCamera, BiCameraOff, BiMicrophone, BiMicrophoneOff } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';

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

export const CameraSwitch = CameraSwitchButton;
export const MicSwitch = MicSwitchButton;
export const SettingsSwitch = ConfigSwitchButton;
