import { useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from '../buttons';
import { classNames } from '../../utils';

export const JokeCard = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [joke, setJoke] = useState();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get('https://icanhazdadjoke.com/', {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        });

        setJoke(result.data.joke);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    };

    if (isFetching) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [isFetching]);

  return (
    <div className='mx-auto min-h-screen w-full max-w-3xl rounded-none bg-neutral-two px-6 py-8 shadow-none md:min-h-fit md:rounded-lg md:p-20 md:shadow-neutral-lg'>
      <p
        className={classNames(
          isLoading ? 'animate-pulse' : 'animate-none',
          'mb-8 text-headline-2xl font-normal text-neutral-ten md:mb-12 md:text-headline-3xl'
        )}
      >
        {isError ? 'There was an error getting joke.' : joke}
      </p>
      <Button
        text='New joke!'
        onClick={() => setIsFetching(true)}
        disabled={isLoading}
      />
    </div>
  );
};
