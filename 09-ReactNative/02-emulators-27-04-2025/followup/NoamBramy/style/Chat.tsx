import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const chatItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.lightGray,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D1D1D6',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.chatItemTextPrimary,
    marginBottom: 2,
  },
  message: {
    fontSize: 15,
    color: Colors.textSecondary,
  },
  metaContainer: {
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  time: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 5,
  },
  unreadBadge: {
    backgroundColor: Colors.badgeBackground,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCountText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export const chatListStyles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F2F2F7', 
  },
});