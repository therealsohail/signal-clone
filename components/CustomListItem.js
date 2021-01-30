import React from "react";
import { ListItem, Avatar } from "react-native-elements";

export default function CustomListItem() {
  return (
    <ListItem bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            "https://powered-by-plants.co.uk/wp-content/uploads/2018/11/people.gif",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>Muhammad Sohail</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a Subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
