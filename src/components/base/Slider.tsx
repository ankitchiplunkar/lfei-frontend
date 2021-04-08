import { useState } from 'react'


export const Slider = () => {
    const [value, setValue] = useState('0.97')
    return (
        <div>
            <input
                onChange={(e) => {
                    setValue(e.currentTarget.value)
                }}
                type={"range"}
                min={0.95}
                defaultValue={0.97}
                max={1}
                step={0.01}
                list={"tick-list"} />
            <datalist id="tick-list">
                <option>0.95</option>
                <option>0.96</option>
                <option>0.97</option>
                <option>0.98</option>
                <option>0.99</option>
                <option>1</option>
            </datalist>
            <span id="output">{value}</span>
        </div>
    )
}

