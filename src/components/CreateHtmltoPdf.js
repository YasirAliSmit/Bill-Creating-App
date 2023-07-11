import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import QRCode from 'react-native-qrcode-svg';
const CreateHtmltoPdf = () => {
  const [plentysId, setPlentysId] = useState('');
  const [errorPlentysId, setErrorPlentysId] = useState(false);
  const [fragileId, setFragileId] = useState('');
  const [errorFragileId, setErrorFragileId] = useState(false);
  const [cold, setCold] = useState('');
  const [ErrorCold, setErrorCold] = useState(false);
  const [cusName, setCusName] = useState('');
  const [errorCusName, setErrorCusName] = useState(false);
  const [address, setAddress] = useState('');
  const [errorAddress, setErrorAddress] = useState(false);
  const [printBy, setPrintBy] = useState('');
  const [errorPrintBy, setErrorPrintBy] = useState(false);
  const [orderedData, setOrderedDate] = useState('');
  const [errorOrderedDate, setErrorOrderedDate] = useState(false);
  const [orderedId, setOrderedId] = useState('');
  const [errorOrderedId, setErrorOrderedId] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [errorQrCode, setErrorQrCode] = useState(false);
  const [city, setCity] = useState('');
  const [errorCity, setErrorCity] = useState(false);
  const [testId, setTestId] = useState('');
  const [errorTestId, setErrorTestId] = useState(false);
  const [amount, setAmount] = useState('');
  const [errorAmount, setErrorAmount] = useState(false);
  const [pices, setPices] = useState('');
  const [errorPices, setErrorPices] = useState(false);
  const [weight, setWeight] = useState('');
  const [errorWeight, setErrorWeight] = useState(false);

  const genratePDF = async () => {
    let options = {
      html: '<div  style="width:100%"><div><div style="margin-top:-30px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;padding-top:30px;padding-bottom:30px;border:1px solid #000000;padding-top:5px;">Plentys</h1><h1 style="width:100%;color:black;text-align:center;padding-top:10px;padding-bottom:10px;border:1px solid #000000;margin-top:-22px;">11100</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">FRAGILE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">111001</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">COLD</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">11100</h1></div></div><div style="display:flex;flex-direction:row;margin-top:-40px"><div style="width:100%;border-width:1px;border-color:black;margin-top:0px;"><h1 style="width:49%;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">CUSTOMER</h1><h1 style="width:100%;color:black;padding-left:5px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">SANDESH</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;margin-top:-40px;"><h3 style="width:48%;padding-left:10px;border:1px solid #000000;padding:10px;">ADDRESS</h3><h3 style="width:97%;color:black;padding-left:10px;padding:10px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">ELEGANTHOME1STFLOORFLAT<br />NO.06-UNDEFINEDCANTONMENTRAILWAY<br />STATION,KARACHI,SINDH,PAKISTAN</h3></div></div><div style="width:100%;border:1px solid #000000;text-align:center;margin-top:-20px;"><span>PRINTEDBY:ZAIN</span></div></div><div style="transform:rotate(180deg);margin-top:10px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;justify-content:center;align-items:center;"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;border:1px solid #000000;padding-top:30px;padding-bottom:30px;">Plentys</h1></div><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;">ORDEREDDATE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;margin-top:-22px;">18FEB,2023</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;display:flex;flex-direction:row;"><div style="margin-left:-13px"><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;">ORDEREDID</h1><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;margin-top:-20px;">01010101</h1></div></div><div style="border:1px solid #000000;width:50%;margin-top:-20px;"><h3>QrCode</h3></div></div><div style="display:flex;flex-direction:row;justify-content:space-between;"><div style="border:1px solid #000000;width:49%;margin-left:3px;"><h2 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:49%;border-width:1px;border-color:black;margin-left:20px;">City:karachi</h2></div><div style="border:1px solid #000000;width:49%"><h2 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:50%;text-align:center;">Test:49850398</h2></div></div><div style="display:flex;flex-direction:row;"><div style="width:49%;margin-left:5px;margin-right:10px;"><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">Amount(Rs)</h3></div><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">100,000</h3></div></div><div style="width:49%;margin-left:10px;"><div style="border:1px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:1px solid #000000;"><h3 style="text-align:center">PIECE(S)</h3></div><div style="width:50%;"><h3 style="text-align:center">WEIGHT</h3></div></div></div><div style="border:0.5px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:0.5px solid #000000;"><h3 style="text-align:center">2</h3></div><div style="width:50%; "><h3 style="text-align:center">0.5kg</h3></div></div></div></div></div></div></div><div></div></div></div>',
      fileName: 'test',
      directory: 'Documents',
      width: 216,
      height: 360,
    };
    const file = await RNHTMLtoPDF.convert(options);
    console.log('here is our file', file); 
  };
  ///console.log(weight)
  const getBill = async () => {
    if (plentysId.length >= 6) {
      setErrorPlentysId(true);
      if (fragileId.length >= 6) {
        setErrorFragileId(true);
        if (cold.length >= 2) {
          setErrorCold(true);
          if (cusName.length >= 5) {
            setErrorCusName(true);
            if (address.length >= 10) {
              setErrorAddress(true);
              if (printBy.length >= 5) {
                setErrorPrintBy(true);
                if (orderedData.length >= 5) {
                  setErrorOrderedDate(true);
                  if (orderedId.length >= 10) {
                    setErrorOrderedId(true);
                    if (qrCode.length >= 5) {
                      setErrorQrCode(true);
                      if (city.length >= 5) {
                        setErrorCity(true);
                        if (testId.length >= 5) {
                          setErrorTestId(true);
                          if (amount.length >= 3) {
                            setErrorAmount(true);
                            if (pices.length >= 1) {
                              setErrorPices(true);
                              if (weight.length >= 1) {
                                setErrorWeight(true);

                                let options = {
                                  ////html: `<div  style="width:100%" ><div><div style="margin-top:-30px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;padding-top:30px;padding-bottom:30px;border:1px solid #000000;padding-top:5px;">Plentys</h1><h1 style="width:100%;color:black;text-align:center;padding-top:10px;padding-bottom:10px;border:1px solid #000000;margin-top:-22px;">${plentysId}</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">FRAGILE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">${fragileId}</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">COLD</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">${cold}</h1></div></div><div style="display:flex;flex-direction:row;margin-top:-40px"><div style="width:100%;border-width:1px;border-color:black;margin-top:0px;"><h1 style="width:49%;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">CUSTOMER</h1><h1 style="width:100%;color:black;padding-left:5px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">${cusName}</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;margin-top:-40px;"><h3 style="width:48%;padding-left:10px;border:1px solid #000000;padding:10px;">ADDRESS</h3><h3 style="width:97%;color:black;padding-left:10px;padding:10px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">${address}</h3></div></div><div style="width:100%;border:1px solid #000000;text-align:center;margin-top:-20px;"><span>${printBy}</span></div></div><div style="transform:rotate(180deg);margin-top:10px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;justify-content:center;align-items:center;"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;border:1px solid #000000;padding-top:30px;padding-bottom:30px;">Plentys</h1></div><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;">ORDEREDDATE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;margin-top:-22px;">${orderedData}</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;display:flex;flex-direction:row;"><div style="margin-left:-13px"><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;">ORDEREDID</h1><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;margin-top:-20px;">${orderedId}</h1></div></div><div style="border:1px solid #000000;width:50%;margin-top:-20px;"><h3>${qrCode}</h3></div></div><div style="display:flex;flex-direction:row;justify-content:space-between;"><div style="border:1px solid #000000;width:49%;margin-left:3px;"><h2 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:49%;border-width:1px;border-color:black;margin-left:20px;">City:${city}</h2></div><div style="border:1px solid #000000;width:49%"><h2 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:50%;text-align:center;">Test:${testId}</h2></div></div><div style="display:flex;flex-direction:row;"><div style="width:49%;margin-left:5px;margin-right:10px;"><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">Amount(Rs)</h3></div><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">${amount}</h3></div></div><div style="width:49%;margin-left:10px;"><div style="border:1px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:1px solid #000000;"><h3 style="text-align:center">PIECE(S)</h3></div><div style="width:50%;"><h3 style="text-align:center">WEIGHT</h3></div></div></div><div style="border:0.5px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:0.5px solid #000000;"><h3 style="text-align:center">${pices}</h3></div><div style="width:50%; "><h3 style="text-align:center">${weight}</h3></div></div></div></div></div></div></div><div></div></div></div>`,
                                  html: '<div><div><div style="margin-top:-30px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;padding-top:30px;padding-bottom:30px;border:1px solid #000000;padding-top:5px;">Plentys</h1><h1 style="width:100%;color:black;text-align:center;padding-top:10px;padding-bottom:10px;border:1px solid #000000;margin-top:-22px;">11100</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">FRAGILE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">111001</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">COLD</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">11100</h1></div></div><div style="display:flex;flex-direction:row;margin-top:-40px"><div style="width:100%;border-width:1px;border-color:black;margin-top:0px;"><h1 style="width:49%;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">CUSTOMER</h1><h1 style="width:100%;color:black;padding-left:5px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">SANDESH</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;margin-top:-40px;"><h3 style="width:48%;padding-left:10px;border:1px solid #000000;padding:10px;">ADDRESS</h3><h3 style="width:97%;color:black;padding-left:10px;padding:10px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">ELEGANTHOME1STFLOORFLAT<br />NO.06-UNDEFINEDCANTONMENTRAILWAY<br />STATION,KARACHI,SINDH,PAKISTAN</h3></div></div><div style="width:100%;border:1px solid #000000;text-align:center;margin-top:-20px;"><span>PRINTEDBY:ZAIN</span></div></div><div style="transform:rotate(180deg);margin-top:10px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;justify-content:center;align-items:center;"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;border:1px solid #000000;padding-top:30px;padding-bottom:30px;">Plentys</h1></div><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;">ORDEREDDATE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;margin-top:-22px;">18FEB,2023</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;display:flex;flex-direction:row;"><div style="margin-left:-13px"><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;">ORDEREDID</h1><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;margin-top:-20px;">01010101</h1></div></div><div style="border:1px solid #000000;width:50%;margin-top:-20px;"><h3>QrCode</h3></div></div><div style="display:flex;flex-direction:row;justify-content:space-between;"><div style="border:1px solid #000000;width:49%;margin-left:3px;"><h2 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:49%;border-width:1px;border-color:black;margin-left:20px;">City:karachi</h2></div><div style="border:1px solid #000000;width:49%"><h2 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:50%;text-align:center;">Test:49850398</h2></div></div><div style="display:flex;flex-direction:row;"><div style="width:49%;margin-left:5px;margin-right:10px;"><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">Amount(Rs)</h3></div><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">100,000</h3></div></div><div style="width:49%;margin-left:10px;"><div style="border:1px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:1px solid #000000;"><h3 style="text-align:center">PIECE(S)</h3></div><div style="width:50%;"><h3 style="text-align:center">WEIGHT</h3></div></div></div><div style="border:0.5px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:0.5px solid #000000;"><h3 style="text-align:center">2</h3></div><div style="width:50%; "><h3 style="text-align:center">0.5kg</h3></div></div></div></div></div></div></div><div></div></div></div>',
                                  fileName: 'test',
                                  directory: 'Documents',
                                  width: 216,
                                  height: 360,
                                };
                                const file = await RNHTMLtoPDF.convert(options);
                                console.log('here is our file', file);
                              } else {
                                setErrorWeight('Kindly Enter Weight in KGs');
                              }
                            } else {
                              setErrorPices('Kindly Enter Valid Quantity');
                            }
                          } else {
                            setErrorAmount('Kindly Enter Valid Amount');
                          }
                        } else {
                          setErrorTestId('Kindly Enter Valid Id!');
                        }
                      } else {
                        setErrorCity('Kindly Enter Valid City!');
                      }
                    } else {
                      setErrorQrCode('Kindly Enter Qr Code');
                    }
                  } else {
                    setErrorOrderedId('Kindly Enter Valid Id!');
                  }
                } else {
                  setErrorOrderedDate('Kindly Enter Valid Date!');
                }
              } else {
                setErrorPrintBy('Kindly Enter Valid Name!');
              }
            } else {
              setErrorAddress('Kindly Enter Valid Address!');
            }
          } else {
            setErrorCusName('Kindly Enter Valid Customer Name');
          }
        } else {
          setErrorCold('Fragile id Should must be Granter than 2 Numbers');
        }
      } else {
        setErrorFragileId('Fragile id Should must be Granter than 6 Numbers');
      }
    } else {
      setErrorPlentysId('Plentys.Pk id Should must be Granter than 6 Numbers');
    }
  };
  return (
    <View className="flex-1">
      <View className="w-full h-16 bg-[#0b223f]">
        <Text className="text-white text-lg font-bold text-center mt-4 font-serif">
          Bill Printing App
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0]">
            <View className=" relative">
              <Text className="absolute top-2 left-8 text-[#0b223f]">
                Plentys.PK Id
              </Text>
              <View className="top-2">
                <AntDesign name="user" size={20} color="black" />
              </View>
              <TextInput
                className="absolute top-4 left-4"
                value={plentysId}
                onChangeText={setPlentysId}
              />
              {errorPlentysId ? (
                <Text className="absolute top-12 left-8 text-red-700">
                  {errorPlentysId}
                </Text>
              ) : null}
            </View>
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              FRAGILE
            </Text>
            <View className="top-2">
              <MaterialCommunityIcons
                name="glass-fragile"
                size={20}
                color="black"
              />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={fragileId}
              onChangeText={setFragileId}
            />
            {errorFragileId ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorFragileId}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">COLD</Text>
            <View className="top-2">
              <MaterialCommunityIcons
                name="snowflake"
                size={20}
                color="black"
              />
            </View>
            <TextInput
              className="absolute top-4 left-8"
              value={cold}
              onChangeText={setCold}
            />
            {ErrorCold ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {ErrorCold}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              CUSTOMER NAME
            </Text>
            <View className="top-2">
              <AntDesign name="user" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={cusName}
              onChangeText={setCusName}
            />
            {errorCusName ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorCusName}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              ADDRESS
            </Text>
            <View className="top-2">
              <Entypo name="address" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={address}
              onChangeText={setAddress}
            />
            {errorAddress ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorAddress}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              Print By
            </Text>
            <View className="top-2">
              <AntDesign name="printer" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={printBy}
              onChangeText={setPrintBy}
            />
            {errorPrintBy ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorPrintBy}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              ORDERED DATE
            </Text>
            <View className="top-2">
              <Octicons name="list-unordered" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={orderedData}
              onChangeText={setOrderedDate}
            />
            {errorOrderedDate ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorOrderedDate}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              ORDERED ID
            </Text>
            <View className="top-2">
              <AntDesign name="idcard" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={orderedId}
              onChangeText={setOrderedId}
            />
            {errorOrderedId ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorOrderedId}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">QrCode</Text>
            <View className="top-2">
              <AntDesign name="qrcode" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={qrCode}
              onChangeText={setQrCode}
            />
            {errorQrCode ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorQrCode}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-9 text-[#0b223f]">City</Text>
            <View className="top-2">
              <FontAwesome5 name="city" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={city}
              onChangeText={setCity}
            />
            {errorCity ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorCity}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              Test Id:
            </Text>
            <View className="top-2">
              <MaterialCommunityIcons
                name="test-tube"
                size={20}
                color="black"
              />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={testId}
              onChangeText={setTestId}
            />
            {errorTestId ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorTestId}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">Amount</Text>
            <View className="top-2">
              <FontAwesome name="dollar" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={amount}
              onChangeText={setAmount}
            />
            {errorAmount ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorAmount}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">
              Quantity
            </Text>
            <View className="top-2">
              <AntDesign name="retweet" size={20} color="black" />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={pices}
              onChangeText={setPices}
            />
            {errorPices ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorPices}
              </Text>
            ) : null}
          </View>
          <View className="w-11/12  h-16 align-middle rounded mt-4 bg-[#e2e8f0] relative">
            <Text className="absolute top-2 left-8 text-[#0b223f]">Weight</Text>
            <View className="top-2">
              <MaterialCommunityIcons
                name="weight-kilogram"
                size={20}
                color="black"
              />
            </View>
            <TextInput
              className="absolute top-4 left-4"
              value={weight}
              onChangeText={setWeight}
            />
            {errorWeight ? (
              <Text className="absolute top-12 left-8 text-red-700">
                {errorWeight}
              </Text>
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => genratePDF()}
            className="w-10/12 bg-[#0b223f] h-12 rounded-full mt-6 mb-6 justify-center ">
            <Text className="text-slate-50 text-center font-bold text-lg ">
              Print Bill
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateHtmltoPdf;