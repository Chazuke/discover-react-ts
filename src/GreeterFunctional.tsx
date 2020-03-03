import React from 'react';

interface GreeterFunctionalProps {
    company: string;
    greeting: string;
}

const GreeterFunctional = ({company, greeting}: GreeterFunctionalProps,) => {
    return (
        <section>
            <h1>GreeterFunctional: {greeting} from {company}</h1>
        </section>
    )
}

export default GreeterFunctional;