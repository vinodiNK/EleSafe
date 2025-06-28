import Toast, { BaseToast } from "react-native-toast-message";

<Toast
  config={{
    error: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#EF4444" }}
        text1Style={{ fontSize: 16, fontWeight: "bold" }}
        text2Style={{ fontSize: 14 }}
      />
    ),
  }}
/>
