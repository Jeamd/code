// @ts-nocheck
/**
 * @title 用餐人数Hooks
 * @Function dinersCountOptions 用餐人数配置
 *
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Form, Radio, message } from 'antd';

// 常量引用
import { DinnerCountEnum } from '@/pages/coupon/constants/index';
import './index.less';

export interface IUseDinnerCountHooksProps {
    // eslint-disable-next-line react/require-default-props
    onChange?: (value: { highestPeopleNum: number; lowestPeopleNum: number }) => void;
    // eslint-disable-next-line react/require-default-props
    value?: {
        highestPeopleNum: number;
        lowestPeopleNum: number;
    };
    defaultValue: {
        highestPeopleNum: number;
        lowestPeopleNum: number;
    };
}

type inputChangeType = 'highest' | 'lowest';

const DinnerCount = ({ value, defaultValue, onChange }: IUseDinnerCountHooksProps) => {
    // 用餐人数radio选中值
    const [radioDefaultValue, setRadioDefaultValue] = useState<string>('0');
    // 用餐人数最高值 - 自定义
    const [highestPeopleNum, setHighestPeopleNum] = useState<string>('7');
    // 用餐人数最低值 - 自定义
    const [lowestPeopleNum, setLowestPeopleNum] = useState<string>('6');

    useEffect(()=>{
        const {highestPeopleNum = 1, lowestPeopleNum = 1} = value || {}
        const notCustom = highestPeopleNum - lowestPeopleNum >= 2 || lowestPeopleNum > 5;
        if(notCustom){
            setRadioDefaultValue(`${highestPeopleNum},${lowestPeopleNum}`);
        }else {
            setRadioDefaultValue('0')
            setHighestPeopleNum(`${highestPeopleNum}`)
            setLowestPeopleNum(`${lowestPeopleNum}`)

        }
    },[value])

    // useeffect监听用餐人数值变化
    const changeValue = (val) => {
        if (val === '0') {
            onChange?.({
                highestPeopleNum: Number(highestPeopleNum),
                lowestPeopleNum: Number(lowestPeopleNum),
            });
        } else {
            const [lowestPeopleNum, highestPeopleNum] = val.split(',');
            onChange?.({
                highestPeopleNum: Number(highestPeopleNum),
                lowestPeopleNum: Number(lowestPeopleNum),
            });
        }
    };

    const fieldData  = async (e: any, type: inputChangeType) => {
        const val = Number(e.target?.value || '');
        if (isNaN(val)) {
            message.error('请输入数字');
            return false;
        }

        if (val > 20) {
            message.error('最多人数不能超过20人');
            return false;
        }

        if((type === 'highest' && val < lowestPeopleNum) ||
            (type === 'lowest' && val > highestPeopleNum)) 
        {
            message.error('最少人数不能大于最多人数');
            return false;
        } 

        return true;
    }

    return (
        <div className="dinner-count">
            <Radio.Group
                value={radioDefaultValue}
                onChange={(e) => {
                    changeValue(e.target.value);
                }}
            >
                {DinnerCountEnum.map((item) => {
                    return (
                        <Radio.Button key={item.value} value={item.value}>
                            {item.label}
                        </Radio.Button>
                    );
                })}
            </Radio.Group>
            {radioDefaultValue === '0' && (
                <div className="custom-input">
                    <input
                        type="text"
                        className="no-border-input"
                        placeholder="最少人数"
                        value={lowestPeopleNum}
                        onChange={(e) => {
                            const pass = fieldData(e, 'lowest')
                            if(!pass) return;
                            onChange({...value, lowestPeopleNum: Number(e.target.value)})
                        }}
                    />
                    -
                    <input
                        type="text"
                        className="no-border-input"
                        placeholder="最多人数"
                        value={highestPeopleNum}
                        onChange={(e) => {
                            const pass = fieldData(e, 'highest')
                            if(!pass) return;
                            onChange({...value, highestPeopleNum: Number(e.target.value)})
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default DinnerCount;