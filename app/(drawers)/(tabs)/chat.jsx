import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import COLORS from "../../../constants/colors";

const ChatScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! Thank you for choosing our hotel. How can I assist you today?",
      sender: "hotel",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      text: "I'd like to know about your check-in time and available amenities.",
      sender: "user",
      timestamp: "10:32 AM",
    },
    {
      id: "3",
      text: "Our check-in time is 2:00 PM and check-out is 11:00 AM. We offer free WiFi, swimming pool, spa, gym, and complimentary breakfast.",
      sender: "hotel",
      timestamp: "10:33 AM",
    },
    {
      id: "4",
      text: "That sounds great! Can I book a room for 2 nights?",
      sender: "user",
      timestamp: "10:35 AM",
    },
  ]);

  // Get hotel details from params
  const hotelName = params?.hotelName || "Hotel Chat";
  const hotelLocation = params?.hotelLocation || "";

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate hotel response
      setTimeout(() => {
        const hotelResponse = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message. Our team will get back to you shortly!",
          sender: "hotel",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, hotelResponse]);
      }, 1000);
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.hotelMessage,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          item.sender === "user"
            ? styles.userMessageBubble
            : styles.hotelMessageBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.sender === "user"
              ? styles.userMessageText
              : styles.hotelMessageText,
          ]}
        >
          {item.text}
        </Text>
        <Text
          style={[
            styles.timestamp,
            item.sender === "user"
              ? styles.userTimestamp
              : styles.hotelTimestamp,
          ]}
        >
          {item.timestamp}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <View style={styles.hotelIconContainer}>
            <Ionicons name="business" size={24} color={COLORS.primary} />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.hotelName}>{hotelName}</Text>
            {hotelLocation ? (
              <View style={styles.locationContainer}>
                <Ionicons
                  name="location"
                  size={12}
                  color={COLORS.textSecondary}
                />
                <Text style={styles.hotelLocation}>{hotelLocation}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color={COLORS.textDark}
          />
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="add-circle" size={28} color={COLORS.primary} />
          </TouchableOpacity>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor={COLORS.placeholderText}
              value={message}
              onChangeText={setMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity style={styles.emojiButton}>
              <Ionicons
                name="happy-outline"
                size={22}
                color={COLORS.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.sendButton,
              !message.trim() && styles.sendButtonDisabled,
            ]}
            onPress={handleSend}
            disabled={!message.trim()}
          >
            <Ionicons
              name="send"
              size={20}
              color={message.trim() ? COLORS.white : COLORS.placeholderText}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tabBackground,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  hotelIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hotelLocation: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 4,
  },
  moreButton: {
    padding: 4,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageContainer: {
    marginBottom: 12,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
  },
  hotelMessage: {
    alignSelf: "flex-start",
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
  },
  userMessageBubble: {
    backgroundColor: COLORS.button,
    borderBottomRightRadius: 4,
  },
  hotelMessageBubble: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 4,
  },
  userMessageText: {
    color: COLORS.white,
  },
  hotelMessageText: {
    color: COLORS.textDark,
  },
  timestamp: {
    fontSize: 10,
    marginTop: 2,
  },
  userTimestamp: {
    color: "rgba(255, 255, 255, 0.8)",
    alignSelf: "flex-end",
  },
  hotelTimestamp: {
    color: COLORS.textSecondary,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  attachButton: {
    marginRight: 8,
    marginBottom: 4,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    maxHeight: 100,
    paddingVertical: 4,
  },
  emojiButton: {
    marginLeft: 8,
    paddingBottom: 2,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.button,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonDisabled: {
    backgroundColor: COLORS.border,
  },
});

export default ChatScreen;
