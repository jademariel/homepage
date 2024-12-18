import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const AgentAssistScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Welcome to the FarmNamin Agent Assist Program!
      </Text>

      {/* "What is Agent Assist?" bold and connected to the following text */}
      <Text style={styles.text}>
        <Text style={styles.textBold}>What is Agent Assist?</Text> The Agent Assist Program is designed to bridge the gap for traditional farmers who want to post their products online but lack a smartphone. We're here to help you access the FarmNamin marketplace easily, ensuring your products reach more buyers.
      </Text>

      <Text style={styles.subHeaderBold}>Purpose:</Text>
      <Text style={styles.text}>
        • Empower Traditional Farmers: Provide a way for farmers without smartphones to participate in the digital marketplace.
      </Text>
      <Text style={styles.text}>
        • Expand Market Reach: Help farmers reach a wider audience and increase their sales.
      </Text>
      <Text style={styles.text}>
        • Support and Guidance: Offer personalized assistance to ensure a smooth and efficient process.
      </Text>

      <Text style={styles.subHeaderBold}>How the Agent Assist Program Works:</Text>

      <Text style={styles.textBold}>1. Contact Us:</Text>
      <Text style={styles.text}>
        • Phone:{" "}
        <Text style={styles.underlinedText}>+639363932522</Text>. Our team is ready to assist you.
      </Text>
      <Text style={styles.text}>
        • Email:{" "}
        <Text style={styles.underlinedText}>support@farmnamin.com</Text>.
      </Text>

      <Text style={styles.textBold}>2. Email Guidelines:</Text>
      <Text style={styles.text}>
        • Subject: Use the subject line "Registration".
      </Text>
      <Text style={styles.text}>
        • Content: Include your basic information such as name, contact number, and the purpose of why you want to join this program.
      </Text>

      <Text style={styles.textBold}>3. Verification Process:</Text>
      <Text style={styles.text}>
        • Interview: Our team will text you to schedule a brief interview to verify your details and guide you through the process.
      </Text>
      <Text style={styles.text}>
        • This interview can be conducted face-to-face at your place to ensure all your queries are addressed.
      </Text>

      <Text style={styles.textBold}>4. Account Management:</Text>
      <Text style={styles.text}>
        • Username and Password: Once verified, you'll receive a unique username and password for your FarmNamin account.
      </Text>
      <Text style={styles.text}>
        • Agent Support: Your dedicated agent will manage your account, handle postings, and communicate with buyers on your behalf.
      </Text>
      <Text style={styles.text}>
        • Product Listings: The agent will take photos of your products and list them for sale on the marketplace.
      </Text>
      <Text style={styles.text}>
        • Regular Updates: You can access your account anytime to monitor sales and updates. Your agent will ensure you are informed of all activities.
      </Text>
      <Text style={styles.text}>
        • Compliance: Agents adhere to strict policies to maintain integrity and trust. They will never misuse your information or account.
      </Text>

      <Text style={styles.subHeaderBold}>Important Note:</Text>
      <Text style={styles.text}>
        • Contact Number: Your contact number is crucial for effective communication between you and your agent. If you change your contact number, please inform your agent immediately to update your account. The agent will keep you informed via text or call about your products and any important updates. This ensures an efficient and effective experience.
      </Text>

      <Text style={styles.subHeaderBold}>Contact Information:</Text>
      <Text style={styles.text}>• Phone:{" "}
        <Text style={styles.underlinedText}>+639363932522</Text>.
      </Text>
      <Text style={styles.text}>• Email:{" "}
        <Text style={styles.underlinedText}>support@farmnamin.com</Text>.
      </Text>
      <Text style={styles.text}>• Office Hours: Monday to Friday, 9 AM to 5 PM</Text>

      <Text style={styles.text}>
        We're committed to making technology accessible to all farmers, helping you thrive in the digital marketplace. Reach out to us, and let's get your products online!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000", 
    marginBottom: 10,
  },
  subHeaderBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 10,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", 
  },
  text: {
    fontSize: 16,
    color: "#000", 
    marginBottom: 12, 
  },
  underlinedText: {
    textDecorationLine: "underline",
    fontSize: 16,
    color: "#000", // Black color for underlined text
  },
});

export default AgentAssistScreen;
