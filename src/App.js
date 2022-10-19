import {useForm} from "react-hook-form";


function App() {

    const {register, handleSubmit} = useForm();
    const submit = (obj) => {
        console.log(obj);

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title', {required: true})}/>
                <input type="text" {...register('body')}/>
                <select {...register('userId')}>
                    <option value='1'>one</option>
                    <option value='2'>two</option>
                    <option value='3'>three</option>
                </select>
                <button>save</button>
            </form>

        </div>
    );
}

export default App;
