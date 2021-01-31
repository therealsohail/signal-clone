import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomListItem({ chat }) {
  const { id, data } = chat;

  return (
    <TouchableOpacity>
      <ListItem>
        <Avatar
          rounded
          source={{
            uri:
              "https://powered-by-plants.co.uk/wp-content/uploads/2018/11/people.gif",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{data["chatName"]}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            This is a Subtitle
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}
