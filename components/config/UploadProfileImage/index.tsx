import * as React from 'react';
import * as S from './styled';
import { useDropzone } from 'react-dropzone';
import * as ImageConversion from 'image-conversion';
import Image from 'next/image';

import { MdAddAPhoto } from 'react-icons/md';
import { Dialog, DialogClose, DialogTrigger, DialogContent } from '@components/common/Dialog';
import { Spinner } from '@components/common/Spinner';
import { Box } from '@components/layout/Box';
import { Button } from '@components/common/Button';
import { Heading } from '@components/common/Heading';
import { Text } from '@components/common/Text';
import { Spacer } from '@components/layout/Spacer';

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

    return (
      <Dialog onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
        <DialogTrigger asChild style={{ width: '100%' }}>
          <Button type="button" backgroundColor="blueGray3" textColor="gray6">
            Foto de perfil
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Box flex center direction="column">
            {isLoading ? (
              <React.Fragment>
                <Box flex center style={{ height: '210px' }}>
                  <Spinner size={48} />
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {isImagePresent ? (
                  <S.ImagePresentWrapper>
                    <Heading center>Foto de perfil atual</Heading>
                    <Spacer size={12} />
                    <Text center>
                      Essa é foto que outros verão quando você juntar-se à uma sala. Caso queira
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
                  </S.ImagePresentWrapper>
                ) : (
                  <React.Fragment>
                    <Heading center>Escolha uma foto de perfil</Heading>
                    <Spacer size={32} />
                    <S.PhotoDragUploadWrapper {...getRootProps()}>
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
                    </S.PhotoDragUploadWrapper>
                    <Spacer size={32} />
                    <DialogClose asChild>
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
