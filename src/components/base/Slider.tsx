import { useState } from 'react'
import { Label } from '../../typography/Label'
import { Text, TextBold } from '../../typography/Text'
import { SectionRow, ContentRow, ContentBlock } from './base'



export const Slider = () => {
    const [value, setValue] = useState('0.97')
    var addressList: { [key: string]: string; } = {};
    addressList["0.95"] = "0xBE0C7113ec53257e9C6123dB59DE957C509dAf8d"
    addressList["0.96"] = "0x237325d76c3d1e91D667e9Af42D062f23357D65F"
    addressList["0.97"] = "0x6c278815069038660277AC06507EC368009Dd2bb"
    addressList["0.98"] = "0x119568e594eC72EF5bca4CCBFa3bdA1bD6edC609"
    addressList["0.99"] = "0xc8B6E3E56463CBb356365f41588ef4172eBefd85"
    addressList["1"] = "0xe1D5C4f2165ED6C683a3d1fAC85Dd2f953585Cb7"

    function changeAddress(value: string): string {
        return addressList[value]
    }

    let address = changeAddress(value)

    return (
        <div>
            <SectionRow>
                <ContentBlock>
                    <ContentRow>
                        <Label>Choose pool</Label>
                    </ContentRow>
                    <ContentRow>
                        <Text>{address}</Text>
                    </ContentRow>
                    <ContentRow>
                        <input
                            onChange={(e) => {
                                setValue(e.currentTarget.value)
                                address = changeAddress(e.currentTarget.value)
                            }}
                            type={"range"}
                            min={0.95}
                            defaultValue={0.97}
                            max={1.00}
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
                    </ContentRow>
                </ContentBlock>
            </SectionRow>
        </div>
    )
}

