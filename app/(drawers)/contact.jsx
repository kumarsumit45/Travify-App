import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLORS from "../../constants/colors";

const ContactScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }
    // Handle form submission
    console.log("Form submitted:", { name, email, subject, message });
    alert("Message sent successfully! We'll get back to you soon.");
    // Clear form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const contactMethods = [
    {
      icon: "mail",
      title: "Email",
      value: "support@travifai.com",
      color: COLORS.button,
    },
    {
      icon: "call",
      title: "Phone",
      value: "+91 1800-123-4567",
      color: "#10B981",
    },
    {
      icon: "location",
      title: "Address",
      value: "Mumbai, Maharashtra",
      color: "#F59E0B",
    },
  ];

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
        <Text style={styles.headerTitle}>Contact Us</Text>
        <View style={styles.placeholder} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Contact Methods */}
          <View style={styles.methodsContainer}>
            {contactMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={styles.methodCard}
                activeOpacity={0.7}
              >
                <View
                  style={[styles.methodIcon, { backgroundColor: method.color }]}
                >
                  <Ionicons name={method.icon} size={24} color={COLORS.white} />
                </View>
                <Text style={styles.methodTitle}>{method.title}</Text>
                <Text style={styles.methodValue}>{method.value}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Contact Form */}
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Send us a Message</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={COLORS.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Your name"
                  placeholderTextColor={COLORS.placeholderText}
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={COLORS.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="your.email@example.com"
                  placeholderTextColor={COLORS.placeholderText}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Subject</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="chatbox-outline"
                  size={20}
                  color={COLORS.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Subject of your message"
                  placeholderTextColor={COLORS.placeholderText}
                  value={subject}
                  onChangeText={setSubject}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Message</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  placeholder="Write your message here..."
                  placeholderTextColor={COLORS.placeholderText}
                  value={message}
                  onChangeText={setMessage}
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Ionicons name="send" size={20} color={COLORS.white} />
              <Text style={styles.submitButtonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  placeholder: {
    width: 32,
  },
  methodsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 12,
  },
  methodCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  methodIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  methodTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  methodValue: {
    fontSize: 11,
    color: COLORS.textDark,
    textAlign: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textDark,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    marginLeft: 12,
  },
  textAreaContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  textArea: {
    fontSize: 15,
    color: COLORS.textDark,
    minHeight: 120,
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.button,
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 8,
    gap: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
});

export default ContactScreen;
