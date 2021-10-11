import * as React from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import * as ImageConversion from 'image-conversion';
import Image from 'next/image';

import { MdAddAPhoto } from 'react-icons/md';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Dialog, DialogClose, DialogTrigger, DialogContent } from '@components/navigation/Dialog';
import { Box } from '@components/layout/Box';
import { Button } from '@components/primitives/Button';
import { Heading } from '@components/primitives/Heading';
import { Text } from '@components/primitives/Text';
import { Spacer } from '@components/layout/Spacer';

const AvatarWrapper = styled.button`
  cursor: pointer;
`;
const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: var(--spacing-xxxl);
  height: var(--spacing-xxxl);
  border-radius: 100%;
  background-color: var(--colors-gray5);

  svg {
    color: var(--colors-blueGray1);
    height: var(--spacing-sm);
    width: var(--spacing-sm);
  }
`;
const PhotoDragUploadWrapper = styled.div`
  background: var(--colors-blueGray6);
  border: dashed 2px var(--colors-blueGray5);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 210px;
  height: 100%;
  padding: var(--spacing-xs);

  svg {
    color: var(--colors-blueGray1);
    height: var(--spacing-sm);
    width: var(--spacing-sm);
  }
`;
const ImagePresentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .profile-image {
    height: 200px;
    width: 200px;
    border-radius: 9999px;
  }
`;

export const UploadProfileImage = React.forwardRef<HTMLButtonElement>(
  ({ ...props }, componentRef) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [imageFile, setImageFile] = React.useState(null);
    const [isImagePresent, setIsImagePresent] = React.useState(false);

    React.useEffect(() => {
      const localStorageImageData = window.localStorage.getItem('features/profileImage');

      if (localStorageImageData) {
        ImageConversion.dataURLtoImage(localStorageImageData).then((data) => {
          setImageFile(data);
        });
        setIsImagePresent(true);
      }

      /* DEBUGGING TABLE */
      /*
      console.table([
        ['Is from useEffect', true],
        ['localStorageImageData', localStorageImageData],
      ]);
      */
    }, [isDialogOpen]);

    const onDrop = React.useCallback((acceptedFiles) => {
      /** Compresses the user submitted image and generates a DataURL string that can be safely stored
       * on the client's localStorage. */
      async function convertImageToDataUrl() {
        const fileBlob = new Blob(acceptedFiles);
        const compressedImage = await ImageConversion.compressAccurately(fileBlob, {
          size: 60,
          accuracy: 0.9,
          width: 200,
          height: 200,
        });
        const finalImage = await ImageConversion.filetoDataURL(compressedImage);
        return finalImage;
      }

      /* Asynchronously converts the image to a DataURL string and updates the imageFile state variable. */
      convertImageToDataUrl().then((data) => {
        setIsLoading(true);
        async function handleImageProcessing() {
          window.localStorage.setItem('features/profileImage', data);
          await ImageConversion.dataURLtoImage(data).then((convertedImage) => {
            setImageFile(convertedImage);
          });
          setIsImagePresent(true);
          setIsLoading(false);
        }

        /* SetTimeout is not usually ideal, but since we're dealing with the images locally, 
        and we don't the user to experience a sudden flash of loading state, it is an adequate 
        way of dealing with perceived progress state without jarring the user. */
        setTimeout(() => handleImageProcessing(), 500);
      });
    }, []);

    /** Resets all tracking states back to default values. */
    const onChangePhoto = () => {
      setIsLoading(false);
      setIsImagePresent(false);
      setImageFile(null);
      window.localStorage.removeItem('features/profileImage');
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
      accept: 'image/jpeg, image/png',
      maxFiles: 1,
      maxSize: 3150000,
      onDrop,
    });

    /* DEBUGGING TABLE */
    /* 
    console.table([
      ['isLoading', isLoading],
      ['imageFile', imageFile],
      ['isImagePresent', isImagePresent],
      ['isDialogOpen', isDialogOpen],
    ]); 
    */

    return (
      <Dialog onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
        <DialogTrigger>
          <AvatarWrapper ref={componentRef} {...props}>
            <AvatarPrimitive.Root>
              <AvatarFallback>
                <MdAddAPhoto />
              </AvatarFallback>
            </AvatarPrimitive.Root>
          </AvatarWrapper>
        </DialogTrigger>
        <DialogContent>
          <Box flex center direction="column">
            {isLoading ? (
              <React.Fragment>
                <div>Loading and stuff</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {isImagePresent ? (
                  <ImagePresentWrapper>
                    <Heading center>Foto de perfil atual</Heading>
                    <Spacer size={12} />
                    <Text center>
                      Essa é foto que outros verão quando você juntar-se a uma sala. Caso queira
                      mudar a foto, clique em <b>Mudar Foto</b>.
                    </Text>
                    <Spacer size={32} />
                    <Image
                      src={imageFile}
                      alt="Imagem de perfil"
                      objectFit="cover"
                      height={200}
                      width={200}
                      className="profile-image"
                    />
                    <Spacer size={32} />
                    <Button
                      backgroundColor="orange1"
                      textColor="orange5"
                      onClick={() => onChangePhoto()}
                    >
                      Mudar foto
                    </Button>
                  </ImagePresentWrapper>
                ) : (
                  <React.Fragment>
                    <Heading center>Escolha uma foto de perfil</Heading>
                    <Spacer size={32} />
                    <PhotoDragUploadWrapper {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <Box flex center direction="column" className="icon-wrapper--active-drag">
                          <MdAddAPhoto />
                          <Text center fontSize="sm" fontWeight={600}>
                            Solte a imagem
                          </Text>
                        </Box>
                      ) : (
                        <Box flex center direction="column">
                          <Text center fontSize="sm" fontWeight={600}>
                            Arraste uma foto aqui
                          </Text>
                          <Text>ou</Text>
                          <Spacer size={12} />
                          <Button backgroundColor="blueGray5" textColor="blueGray1">
                            Escolha uma foto
                          </Button>
                          <Spacer size={16} />
                          <Text center>
                            A foto dever estar no formato <b>.png</b> ou <b>.jpeg</b>
                          </Text>
                        </Box>
                      )}
                    </PhotoDragUploadWrapper>
                    <Spacer size={32} />
                    <DialogClose>
                      <Button backgroundColor="orange1" textColor="orange5">
                        Voltar
                      </Button>
                    </DialogClose>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    );
  }
);
