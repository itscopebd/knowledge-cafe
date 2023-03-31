import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <h4 className='text-3xl font-bold text-left my-10'>What's props and states are different?</h4>
            <div>
                <h4 className='font-bold text-left text-4xl mb-4'>Ans:</h4>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Props</th>
                            <th>State</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className='text-3xl'>1. Props receive data from its parent component.</td>
                            <td className='text-3xl'>1. state is internal and controlled by the component. </td>

                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className='text-3xl'>2. props must be declared inside () of the function.</td>
                            <td className='text-3xl'>2.The state must be declared inside the function. </td>

                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className='text-3xl'>3. The value of props cannot be changed.</td>
                            <td className='text-3xl'>3. Let's update the state value </td>

                        </tr>
                    </tbody>
                </table>
                <div className='text-left font-bold'>
                    <h4 className='text-3xl font-bold text-left my-10'>How to work in useState ?</h4>
                    <p>use state Updates the value of state.</p>
                    <p>Use State is used to render as soon as one of the values of the component is updated.</p>
                    <p>use state takes a value by default.</p>
                </div>
                <div className='text-left font-bold'>
                    <h4 className='text-3xl font-bold text-left my-10'>How to work in useEffect ?</h4>
                    <p>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
                    <p> fetching data, directly updating the DOM, and timers</p>
                    <p>useEffect accepts two arguments.</p>
                 
                </div>
                <div className='text-left font-bold'>
                    <h4 className='text-3xl font-bold text-left my-10'>How does work react?</h4>
                    <p>React is a popular JavaScript library for building user interfaces. It allows developers to build reusable and composable UI components.</p>
                    <p>This is done using a virtual DOM, which is a lightweight representation of the actual DOM. When the state of a component changes, React updates the virtual DOM, and then efficiently updates the actual DOM to reflect the changes.</p>
                 
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;