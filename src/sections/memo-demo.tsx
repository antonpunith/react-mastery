import { useState, memo } from "react";

const MemoDemo = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <div>
            <label>
                Name{': '}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <Greeting name={name} isMemoized={false} />
            <MemoizedGreeting name={name} isMemoized={true} />
        </div>
    );
}

export default MemoDemo;

const Greeting = ({ name, isMemoized }: { name: string, isMemoized: boolean }) => {
    console.log(`${isMemoized ? 'Memoized' : 'Non memoized'}  Greeting was rendered at`, new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
}

const MemoizedGreeting = memo(Greeting)

