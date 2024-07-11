import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { SerasaButton } from '../../components/SerasaButton';
import { SerasaFormErrorMessage } from '../../components/SerasaFormErrorMessage';
import { SerasaHeader } from '../../components/SerasaHeader';
import { SerasaInput } from '../../components/SerasaInput';
import { SerasaLabel } from '../../components/SerasaLabel';
import { SerasaLoadingPage } from '../../components/SerasaLoadingPage';
import { SerasaRatingReview } from '../../components/SerasaRatingReview';
import { SerasaTextarea } from '../../components/SerasaTextarea';

import { CONSTANTS } from '../utils/constants';
import type { IPropsForm } from './types';
import { FormGroup } from './styles';

export const Home = () => {
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IPropsForm>();

  const navigate = useNavigate();

  useEffect(() => {
    setValue('review', rating);
  }, [rating, setValue]);

  const onSubmitForm: SubmitHandler<IPropsForm> = (data) => {
    console.log('onSubmitForm:', data);
    setLoading(true);

    setTimeout(() => {
      reset(data);
      navigate('sucesso');
    }, 5000);
  };

  const inputName = (field) => (
    <SerasaInput
      className={errors?.name && 'error'}
      id={CONSTANTS.name}
      type="text"
      {...field}
    />
  );

  const textAreaComment = (field) => (
    <SerasaTextarea id={CONSTANTS.comment} rows={8} {...field} />
  );

  return (
    <>
      {loading ? (
        <SerasaLoadingPage />
      ) : (
        <>
          <SerasaHeader />

          <main>
            <div className="text-center">
              <h1>
                Conte para gente quão satisfeito você está com os nossos
                serviços.
              </h1>

              <p>Avalie de 1 à 5 estrelas</p>

              <SerasaRatingReview
                error={!!errors.review && rating === 0}
                rating={rating}
                setRating={setRating}
              />
              {errors.review && rating === 0 && (
                <SerasaFormErrorMessage message="Por favor selecione ao menos uma estrela!" />
              )}
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)}>
              <input
                {...register('review', { required: true, min: 1, value: 0 })}
                name="review"
                defaultValue={rating}
                type="hidden"
              />

              <FormGroup marginBottom={32}>
                <SerasaLabel name={CONSTANTS.name} description="Nome" />
                <Controller
                  name="name"
                  render={({ field }) => inputName(field)}
                  control={control}
                  rules={{
                    required: true,
                  }}
                />

                {errors.name && (
                  <SerasaFormErrorMessage message="Por favor informe seu nome!" />
                )}
              </FormGroup>

              <FormGroup marginBottom={48}>
                <SerasaLabel
                  name={CONSTANTS.comment}
                  description="Comentário (opcional)"
                />

                <Controller
                  name="comment"
                  render={({ field }) => textAreaComment(field)}
                  control={control}
                />
              </FormGroup>

              <SerasaButton type="submit" title="Enviar avaliação">
                Enviar avaliação
              </SerasaButton>
            </form>
          </main>
        </>
      )}
    </>
  );
};
