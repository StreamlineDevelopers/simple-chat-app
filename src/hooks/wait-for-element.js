import { useEffect, useState } from 'react';

const useWaitForElm = (selector) => {
    const [isElementExist, setIsElementExist] = useState();
    const [element, setElement] = useState();

    const waitForElm = (selector) => {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
    
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    } // create an observer for the dom if a new element exist

    const data = async() => {
        try{
            let dataElm = await waitForElm(selector);
            if(dataElm){
                setElement(dataElm);
                setIsElementExist(true);
            }else{
                setElement('');
                setIsElementExist(false);
            }
        }catch( err ){
            console.log(err.response.data.message)
        }
    } // call the created observer method and set the use state

    
    useEffect(() => {
        data();

    }, [element, isElementExist]) //add element and isElementExist dependencies if you want to log the data

    return [element, isElementExist];
}

//source: https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
export {useWaitForElm};