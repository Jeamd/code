// @ts-nocheck
// /**
//  * @title 用餐人数Hooks
//  * @Function dinersCountOptions 用餐人数配置
//  *
//  */

// import React, { useEffect, useState } from 'react';
// import { Form, Radio, message } from 'antd';

// // 常量引用
// import { DinnerCountEnum } from '@/pages/coupon/constants/index';
// import './index.less';

// export interface IUseDinnerCountHooksProps {
//     // eslint-disable-next-line react/require-default-props
//     onChange?: (value: { highestPeopleNum: number; lowestPeopleNum: number }) => void;
//     // eslint-disable-next-line react/require-default-props
//     value?: {
//         highestPeopleNum: number;
//         lowestPeopleNum: number;
//     };
// }

// const DinnerCount = ({ value, onChange }: IUseDinnerCountHooksProps) => {
//     // 用餐人数radio选中值
//     const [radioDefaultValue, setRadioDefaultValue] = useState<string>('0');
//     // 用餐人数最高值 - 自定义
//     const [highestPeopleNum, setHighestPeopleNum] = useState<string>('7');
//     // 用餐人数最低值 - 自定义
//     const [lowestPeopleNum, setLowestPeopleNum] = useState<string>('6');

//     useEffect(()=>{
//         const {highestPeopleNum = 1, lowestPeopleNum = 1} = value || {}
//         if (!value) {
//             // 新建的时候默认初始值
//             onChange?.({
//                 highestPeopleNum: Number(highestPeopleNum),
//                 lowestPeopleNum: Number(lowestPeopleNum),
//             });
//         };
//         const notCustopmArr = [ '1,1', '2,2','2,3', '3,4', '4,5', '5,6'];
//         const isCustom = !notCustopmArr.includes(`${lowestPeopleNum},${highestPeopleNum}`);

//         if(isCustom){
//             setRadioDefaultValue('0')
//             setHighestPeopleNum(`${highestPeopleNum}`)
//             setLowestPeopleNum(`${lowestPeopleNum}`)
//         }else {
//             setRadioDefaultValue(`${lowestPeopleNum},${highestPeopleNum}`);
//         }

//     },[value])

//     // useeffect监听用餐人数值变化
//     const changeValue = (val) => {
//         if (val === '0') {
//             onChange?.({
//                 highestPeopleNum: Number(highestPeopleNum),
//                 lowestPeopleNum: Number(lowestPeopleNum),
//             });
//         } else {
//             const [lowestPeopleNum, highestPeopleNum] = val.split(',');
//             onChange?.({
//                 highestPeopleNum: Number(highestPeopleNum),
//                 lowestPeopleNum: Number(lowestPeopleNum),
//             });
//         }
//     };

//     return (
//         <div className="dinner-count">
//             <Radio.Group
//                 value={radioDefaultValue}
//                 onChange={(e) => {
//                     changeValue(e.target.value);
//                 }}
//             >
//                 {DinnerCountEnum.map((item) => {
//                     return (
//                         <Radio.Button key={item.value} value={item.value}>
//                             {item.label}
//                         </Radio.Button>
//                     );
//                 })}
//             </Radio.Group>
//             {radioDefaultValue === '0' && (
//                 <div className="custom-input">
//                     <input
//                         type="text"
//                         className="no-border-input"
//                         placeholder="最少人数"
//                         value={lowestPeopleNum}
//                         onBlur={(e) => {
//                             let _lowestPeopleNum = lowestPeopleNum;
//                             let _highestPeopleNum = highestPeopleNum;
//                             if (isNaN(Number(e.target.value))) {
//                                 message.error('请输入数字');
//                                 _lowestPeopleNum = ''
//                                 return;
//                             } else if (Number(e.target.value) > 20) {
//                                 message.error('最多人数不能超过20人');
//                                 _lowestPeopleNum = '20';
//                                 _highestPeopleNum = '20';
//                             } else if (Number(e.target.value) >= Number(highestPeopleNum)) {
//                                 message.error('最少人数不能大于最多人数');
//                                 _lowestPeopleNum = e.target.value - 1;
//                                 _highestPeopleNum = e.target.value;
//                             } else if (Number(e.target.value) === 0) {
//                                 message.error('最少人数不能为0');
//                                 _lowestPeopleNum = '1';
//                             } else {
//                                 _lowestPeopleNum = e.target.value;
//                             }
//                             onChange({...value, lowestPeopleNum: Number(_lowestPeopleNum), highestPeopleNum: Number(_highestPeopleNum)});
//                         }}
//                         onChange={(e) => {
//                             // onChange({...value, lowestPeopleNum: Number(e.target.value)});
//                             setLowestPeopleNum(Number(e.target.value))
//                         }}
//                     />
//                     -
//                     <input
//                         type="text"
//                         className="no-border-input"
//                         placeholder="最多人数"
//                         value={highestPeopleNum}
//                         onBlur={(e) => {
//                             let _lowestPeopleNum = lowestPeopleNum;
//                             let _highestPeopleNum = highestPeopleNum;
//                             if (isNaN(Number(e.target.value))) {
//                                 message.error('请输入数字');
//                                 _highestPeopleNum = ''
//                                 return;
//                             } else if (Number(e.target.value) > 20) {
//                                 message.error('最多人数不能超过20人');
//                                 _highestPeopleNum = '20'
//                             } else if (Number(e.target.value) <= Number(lowestPeopleNum)) {
//                                 message.error('最多人数不能小于最少人数');
//                                 _lowestPeopleNum = lowestPeopleNum;
//                                 _highestPeopleNum = Number(lowestPeopleNum) + 1;
//                             } else {
//                                 _highestPeopleNum = e.target.value
//                             }
//                             onChange({...value, lowestPeopleNum: Number(_lowestPeopleNum), highestPeopleNum: Number(_highestPeopleNum)})
//                         }}
//                         onChange={(e) => {
//                             // onChange({...value, highestPeopleNum: Number(e.target.value)})
//                             setHighestPeopleNum(Number(e.target.value))
//                         }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DinnerCount;

// const allGroups = [
// 	[
//         {
//             "itemKey": "1709017720839550GROUP",
//             "title": "哦哦哦",
//             "selectNum": 1,
//             "fromNum": 1,
//             "setMealContents": [{
//                 "itemKey": "1709017720839777MEAL",
//                 "title": "看看",
//                 "count": 1,
//                 "price": 1,
//                 "subContents": []
//             }]
// 	    },
//         {
//             "itemKey": "1709017720839550GROUP",
//             "title": "我是多个",
//             "selectNum": 1,
//             "fromNum": 1,
//             "setMealContents": [{
//                 "itemKey": "1709017720839777MEAL",
//                 "title": "看看2",
//                 "count": 1,
//                 "price": 1000,
//                 "subContents": []
//             }]
// 	    },
//     ],
// 	[
//         {
//             "itemKey": "1709017757129745GROUP",
//             "title": "哦哦",
//             "selectNum": 1,
//             "fromNum": 1,
//             "setMealContents": [{
//                 "itemKey": "1709017757129279MEAL",
//                 "title": "哦哦",
//                 "count": 1,
//                 "price": 1,
//                 "subContents": []
//             }]
//         },
//         {
//             "itemKey": "1709017757129745GROUP",
//             "title": "哦哦",
//             "selectNum": 1,
//             "fromNum": 1,
//             "setMealContents": [{
//                 "itemKey": "1709017757129279MEAL",
//                 "title": "哦哦",
//                 "count": 1,
//                 "price": 1,
//                 "subContents": []
//             }]
//         }
//     ],
// ]

// interface Type {
//     currentIndex: number;
//     subContents: never[];
//     price: number;
//     serviceDuration: number;
//     count: number;
//     title: string;
// }

// 校验所有skulist数据中的每一项数据的group的price单价是否全部为空，如果全部为空，则给该项数据加一个字段标识是全部为空
// let emptyIndexSet = new Set()
// const setMealContentsTemp = allGroups.reduce((pre, subGroup,currentIndex)=>{
//     const setMealContentsItem = subGroup.map(({setMealContents = []}) =>
//         setMealContents.map(item => {
//             const {price} = item
//             const isEmpty = !price;
//             isEmpty && emptyIndexSet.add(currentIndex)
//             return item
//         })
//     ).flat()
//     return [...pre, ...setMealContentsItem];
// },[])
// const allEmpty = setMealContentsTemp.every(({price}) => !price)
// const allHas = setMealContentsTemp.every(({price}) => !!price)
// if(!allEmpty && !allHas) {
//     // newErrMsgs.group[[...emptyIndexSet][0]] = '方案搭配中的所有单价必填'
// }

// function floatArr (obj = {}, pIndex, emptyIndexSet = new Set()) {
//     if(Array.isArray(obj)) {
//         obj.map((item, index) => floatArr(item, pIndex || index, emptyIndexSet))
//         return emptyIndexSet
//     }

//     const {setMealContents, price} = obj;
//     if(setMealContents) {
//         floatArr(setMealContents, pIndex, emptyIndexSet)
//         return emptyIndexSet
//     }

//     !price && !isNaN(Number(pIndex)) && emptyIndexSet.add(pIndex)
//     return emptyIndexSet;
// }

// console.log([...floatArr(allGroups)])

// let groupIndex = 0;
// const isAllPricePass = allGroups.every((fitem, index) => {
//     const allEmpty = fitem.every((item) => item.setMealContents.length > 0 && item.setMealContents.every((meal) => !meal.price));
//     !allEmpty && (groupIndex = index);
//     return fitem.length > 0 && allEmpty;
// }) || allGroups.every((fitem, index) => {
//     const noAllEmpty = fitem.every((item) => item.setMealContents.length > 0 && item.setMealContents.every((meal) => !!meal.price));
//     !noAllEmpty && (groupIndex = index);
//     return fitem.length > 0 && noAllEmpty;
// });
// console.log('allGroups-----------------', isAllPricePass);
// !isAllPricePass && ( newErrMsgs.group[groupIndex] = '方案搭配中的所有单价必填')

// const isEditOrAddShow = newSkuList?.length == 1 || (!isOnlyEdit && !newSkuList?.length);

let data = [
  {
    categoryId: 10000000,
    categoryName: "美食",
    categoryPid: 0,
    hierarchy: 1,
    sortNum: 1,
    categoryDesc: "美食",
    isLeaf: false,
    categoryStatus: 100,
    createTime: 1695281501122,
    updateTime: 1706496739436,
    childCategory: [
      {
        categoryId: 10100000,
        categoryName: "北京菜",
        categoryPid: 10000000,
        hierarchy: 2,
        sortNum: 1,
        categoryDesc: "美食-北京菜",
        isLeaf: false,
        categoryStatus: 100,
        createTime: 1695281501122,
        updateTime: 1706496739441,
        childCategory: [
          {
            categoryId: 10100001,
            categoryName: "烤鸭",
            categoryPid: 10100000,
            hierarchy: 3,
            sortNum: 1,
            categoryDesc: "美食-北京菜-烤鸭",
            isLeaf: true,
            categoryStatus: 100,
            createTime: 1695281501122,
            updateTime: 1706496739446,
            childCategory: null,
            disable: true,
            disableReason: "kdmkfmdkmfkmk",
            disableType: 0,
          },
          {
            categoryId: 10100002,
            categoryName: "北京菜",
            categoryPid: 10100000,
            hierarchy: 3,
            sortNum: 2,
            categoryDesc: "美食-北京菜-北京菜",
            isLeaf: true,
            categoryStatus: 100,
            createTime: 1695281501122,
            updateTime: 1706496739447,
            childCategory: null,
            disable: false,
            disableReason: null,
            disableType: 0,
          },
        ],
        disable: false,
        disableReason: null,
        disableType: 0,
      },
      {
        categoryId: 10200000,
        categoryName: "地方菜",
        categoryPid: 10000000,
        hierarchy: 2,
        sortNum: 2,
        categoryDesc: "美食-地方菜",
        isLeaf: false,
        categoryStatus: 100,
        createTime: 1695281501122,
        updateTime: 1706496739554,
        childCategory: [
          {
            categoryId: 10200001,
            categoryName: "川菜",
            categoryPid: 10200000,
            hierarchy: 3,
            sortNum: 1,
            categoryDesc: "美食-地方菜-川菜",
            isLeaf: true,
            categoryStatus: 100,
            createTime: 1695281501122,
            updateTime: 1706496739558,
            childCategory: null,
            disable: false,
            disableReason: null,
            disableType: 0,
          },
          {
            categoryId: 10200002,
            categoryName: "东北菜",
            categoryPid: 10200000,
            hierarchy: 3,
            sortNum: 2,
            categoryDesc: "美食-地方菜-东北菜",
            isLeaf: true,
            categoryStatus: 100,
            createTime: 1695281501122,
            updateTime: 1706496739560,
            childCategory: null,
            disable: false,
            disableReason: null,
            disableType: 0,
          },
        ],
        disable: false,
        disableReason: null,
        disableType: 0,
      },
    ],
  },
];
