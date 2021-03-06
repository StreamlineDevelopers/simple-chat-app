import { useEffect, useState } from 'react';

const useIsEmpty = (object) => {
    const [isEmpty, setIsEmpty] = useState(false);

    const empty = (object) => {
       for (let key in object){
           if(object.hasOwnProperty(key)){
            setIsEmpty(false);
           }
       }
       setIsEmpty(true);
      }

    useEffect(() => {
      empty(object);

        return () => {
            empty(object);
        }

    }, [object])

    return isEmpty;
}

export {useIsEmpty};