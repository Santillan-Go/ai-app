import { NextResponse } from "next/server";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-002",
});

const generationConfig = {
  temperature: 0.4,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// export const POST = async (req) => {
//   // const chatSession = model.startChat({
//   //   generationConfig,
//   //   history: [
//   //     {
//   //       role: "user",
//   //       parts: [{ text: "hi\n" }],
//   //     },
//   //     {
//   //       role: "model",
//   //       parts: [{ text: "Hi there! How can I help you today?\n" }],
//   //     },
//   //     {
//   //       role: "user",
//   //       parts: [{ text: "Hi\n" }],
//   //     },
//   //     {
//   //       role: "model",
//   //       parts: [{ text: "Hi!  What's up?\n" }],
//   //     },
//   //   ],
//   // });

//   try {
//     // const message = await req.json();

//     //const result = await chatSession.sendMessage(message.text);
//     // console.log(result.response.text());

//     //-----
//     const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEYS);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = "Write a story about a magic backpack.";

//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
//     return NextResponse.json({ message: "GOOOD" });
//   } catch (error) {
//     console.error(error.message);
//     return NextResponse.json({
//       message: "Error processing your request",
//       error: true,
//     });
//   }
// };

export const POST = async (req) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return NextResponse.json({ message: "Story generated successfully" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({
      message: "Error processing your request",
      error: true,
    });
  }
};
