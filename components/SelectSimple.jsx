import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

export const SelectSimple = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [data, setData] = useState([]);

  const getMasters = async () => {
    try {
      const res = await fetch("http://localhost:5000/api");
      const data = await res.json();
      if (data) {
        // alert(data.users);
        setData(data.users);
      }
    } catch (error) {
      alert("ERROR", error.message);
    }
  };

  useEffect(() => {
    getMasters();
  }, []);

  return (
    <Select
      placeholder={"Select master"}
      value={data ? data[selectedIndex - 1] : undefined}
      selectedIndex={selectedIndex}
      onSelect={(index) => {
        setSelectedIndex(index);
      }}
    >
      {data?.map((item) => {
        return <SelectItem title={item} />;
      })}
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
