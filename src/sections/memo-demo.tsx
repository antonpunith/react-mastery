import { useState, memo } from "react";

// Main component that contains the state and renders the Greeting components
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
            {/* Regular Greeting component that will re-render whenever the parent component re-renders */}
            <Greeting name={name} isMemoized={false} />
            {/* Memoized Greeting component that will only re-render if the `name` prop changes */}
            <MemoizedGreeting name={name} isMemoized={true} />
        </div>
    );
}

export default MemoDemo;

// Regular Greeting component that logs every time it is rendered
const Greeting = ({ name, isMemoized }: { name: string, isMemoized: boolean }) => {
    console.log(`${isMemoized ? 'Memoized' : 'Non memoized'}  Greeting was rendered at`, new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
}

// Memoized version of the Greeting component using React's `memo` HOC
const MemoizedGreeting = memo(Greeting)

