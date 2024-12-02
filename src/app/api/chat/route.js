import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  //YOU CAN CREATE ANOTHER EXAMPLE WHERE YOU PASS THE ARRAY TO THE AI JUST TO REMEMBER
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
  try {
    // Extract the `prompt` from the body of the request
    const { content, lastMessages, username, language } = await req.json();
    console.log({ username });
    // console.log(lastMessages, "lastmessages");
    console.log(content, "content");

    //CREATE SUMMARIZE
    // let summary;

    // if (lastMessages.length !== 0) {
    //   console.log("NOTHING, RIGH???");
    //   const summarizeResult = await genAI
    //     .getGenerativeModel({ model: "gemini-1.5-flash" })
    //     .generateContentStream(
    //       `Please create a summary of the following conversation history. Focus on the key details that would help in continuing the conversation contextually in the future. Ensure that the user identity, their goals, and important facts are retained: ${JSON.stringify(
    //         lastMessages
    //       )}, remember the user's name is carlos`
    //     );
    //   summary = (await summarizeResult.response).text();
    // }

    // console.log(summary, "summary");
    //gemini-1.5-flash
    let geminiStream;
    if (lastMessages.length !== 0 && username) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const prompt = `si necesitas contexto para responder preguntas aquí está:${JSON.stringify(
        lastMessages
      )} todo ese array es la conversación entre tú(role:AI) y user${username}, tú eres la AI(role), enfocate en responder esto:${content},remember the user's name is ${username}. Por favor responde todo en ${language} `;

      const result = await model.generateContent(prompt);
      // console.log(result.response.text());

      geminiStream = result.response.text();
      //       geminiStream = await genAI
      //         .getGenerativeModel({ model: "gemini-1.5-flash", tools: {} })
      //         .generateContentStream(
      //           ` si necesitas contexto para responder preguntas aquí está:${JSON.stringify(
      //             lastMessages
      //           )}} tú eres la AI(role), enfocate en responder esto:${content},remember the user's name is ${username} `
      //         );
    } else if (lastMessages.length !== 0 && !username) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = ` si necesitas contexto para responder preguntas aquí está:${JSON.stringify(
        lastMessages
      )}} todo ese array es la conversación entre tú(role:AI) y user${username},tú eres la AI(role), enfocate en responder esto:${content}. Por favor responde todo en ${language}`;

      const result = await model.generateContent(prompt);
      // console.log(result.response.text());

      geminiStream = result.response.text();

      // geminiStream = await genAI
      //   .getGenerativeModel({ model: "gemini-1.5-flash" })
      //   .generateContentStream(
      //     ` si necesitas contexto para responder preguntas aquí está:${JSON.stringify(
      //       lastMessages
      //     )}} tú eres la AI(role), enfocate en responder esto:${content} `
      //   );
    } else if (lastMessages.length === 0 && username) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `tú eres la AI(role), enfocate en responder esto:${content}, remember name of the user is ${username}.  Por favor responde todo en ${language}`;

      const result = await model.generateContent(prompt);
      console.log(result.response.text());

      geminiStream = result.response.text();

      // geminiStream = await genAI
      //   .getGenerativeModel({ model: "gemini-1.5-flash" })
      //   .generateContentStream(
      //     `${content}, remember name of the user is ${username}`
      //   );
    } else if (lastMessages.length === 0 || !username) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `enfocate en responder esto: ${content}`;

      const result = await model.generateContent(prompt);
      // console.log(result.response.text());

      geminiStream = result.response.text();
      // geminiStream = await genAI
      //   .getGenerativeModel({ model: "gemini-1.5-flash" })
      //   .generateContentStream(`${content}`);
    }

    //  const text = (geminiStream.response.te).text();
    // console.log({ text });
    return NextResponse.json({ content: geminiStream, role: "AI" });
  } catch (error) {
    console.error(error, "ERROR");
    return NextResponse.json(
      { message: "Please try again", error: true },
      { status: 500 }
    );
  }
}

// REMEMBER WITH SUMMARIZE
// export async function POST(req) {
//   try {
//     // Extract the `prompt` from the body of the request
//     const { content, lastMessages } = await req.json();

//     console.log(lastMessages, "lastmessages");
//     console.log(content, "content");

//     //CREATE SUMMARIZE
//     let summary;

//     if (lastMessages.length !== 0) {
//       console.log("NOTHING, RIGH???");
//       const summarizeResult = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash" })
//         .generateContentStream(
//           `Please create a summary of the following conversation history. Focus on the key details that would help in continuing the conversation contextually in the future. Ensure that the user identity, their goals, and important facts are retained: ${JSON.stringify(
//             lastMessages
//           )}, remember the user's name is carlos`
//         );
//       summary = (await summarizeResult.response).text();
//     }

//     console.log(summary, "summary");

//     //gemini-1.5-flash
//     let geminiStream;
//     if (lastMessages.length !== 0) {
//       geminiStream = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash" })
//         .generateContentStream(
//           ` si necesitas contexto para responder preguntas aquí está:${summary}, enfocate en responder esto:${content},remember the user's name is carlos `
//         );
//     } else {
//       geminiStream = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash" })
//         .generateContentStream(content);
//     }

//     const text = (await geminiStream.response).text();
//     return NextResponse.json({ content: text, role: "AI" });
//   } catch (error) {
//     console.error(error, "ERROR");
//     return new Response("An error occurred", { status: 500 });
//   }
// }

/*
 const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
*/

// export async function POST(req) {
//   //YOU CAN CREATE ANOTHER EXAMPLE WHERE YOU PASS THE ARRAY TO THE AI JUST TO REMEMBER
//   const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
//   try {
//     // Extract the `prompt` from the body of the request
//     const { content, lastMessages, username } = await req.json();

//     console.log(lastMessages, "lastmessages");
//     console.log(content, "content");

//     //CREATE SUMMARIZE
//     // let summary;

//     // if (lastMessages.length !== 0) {
//     //   console.log("NOTHING, RIGH???");
//     //   const summarizeResult = await genAI
//     //     .getGenerativeModel({ model: "gemini-1.5-flash" })
//     //     .generateContentStream(
//     //       `Please create a summary of the following conversation history. Focus on the key details that would help in continuing the conversation contextually in the future. Ensure that the user identity, their goals, and important facts are retained: ${JSON.stringify(
//     //         lastMessages
//     //       )}, remember the user's name is carlos`
//     //     );
//     //   summary = (await summarizeResult.response).text();
//     // }

//     // console.log(summary, "summary");

//     //gemini-1.5-flash
//     let geminiStream;
//     if (lastMessages.length !== 0 && username) {
//       geminiStream = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash", tools: {} })
//         .generateContentStream(
//           ` si necesitas contexto para responder preguntas aquí está:${JSON.stringify(
//             lastMessages
//           )}} tú eres la AI(role), enfocate en responder esto:${content},remember the user's name is ${username} `
//         );
//     } else if (lastMessages.length !== 0 && !username) {
//       geminiStream = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash" })
//         .generateContentStream(
//           ` si necesitas contexto para responder preguntas aquí está:${JSON.stringify(
//             lastMessages
//           )}} tú eres la AI(role), enfocate en responder esto:${content} `
//         );
//     } else if (lastMessages.length === 0 && username) {
//       geminiStream = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash" })
//         .generateContentStream(
//           `${content}, remember name of the user is ${username}`
//         );
//     } else if (lastMessages.length === 0 || !username) {
//       geminiStream = await genAI
//         .getGenerativeModel({ model: "gemini-1.5-flash" })
//         .generateContentStream(`${content}`);
//     }

//     const text = (await geminiStream.response).text();
//     console.log({ text });
//     return NextResponse.json({ content: text, role: "AI" });
//   } catch (error) {
//     console.error(error, "ERROR");
//     return NextResponse.json(
//       { message: "Please try again", error: true },
//       { status: 500 }
//     );
//   }
// }

/*
Considering the previous context: ${summary} if you need it, here is my response to "${content}
  // const context = lastMessages
    //   .map((msg, index) => `Message ${index + 1}: ${msg.content}`)
    //   .join("\n");
    // console.log(context);
    // console.log(summary);
    //NOOO
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const result = await model.generateContent(data.prompt);
    // const response = await result.response;
    // const code = await response.text();


    
    // console.log(geminiStream.response.text());
    // Convert the response into a friendly text-stream
    // const stream = GoogleGenerativeAIStream(geminiStream);

    // // Respond with the stream

    // return new StreamingTextResponse(stream);
*/
