import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
GoalItem.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  id: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#eee",
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
