import { useEffect, useState } from "react";
import { render } from "react-dom";

const useSearchImpl = ()=> {
    const [docs, setDocs] = useState<Doc[]>();
    const [values, setValues] = useState<string>("");
    
    const search = async (input:string) => {
        setDocs(await getConvertedData(input))
    }
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(event.target.value);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await search(values); // triggering the callback
    };

    const renderDocs = () => {
        return(<div className='container'>
        {docs?.map((d)=> 
        <>
          <div className='container p-2 border-bottom border-secondary m-2'>
            <h5>{d.doc}</h5>
            <p>{d.content.substring(0,500)} <a href='#'>... See More</a></p>
          </div>
        </>
        )}
      </div>)
      }
    
      useEffect(()=>{
        renderDocs()
      },[docs])
    
    
    return { docs, onChange, onSubmit, renderDocs }
}


interface Doc {
    doc: string
    content: string
}

async function getConvertedData(input:string): Promise<Doc[]>{
	return fetch('//34.128.65.212:8000/search?query='+input, {
		method: 'GET',
	}).then(response => {
        console.log(response)
        return response.json()
      }).then(data => { /* <-- data inferred as { data: T }*/
      return data.data
    })
    }

export default useSearchImpl;