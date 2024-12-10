"use client";
import { useEffect, useRef, useState } from "react";

function Note() {
  const [inputs, setInputs] = useStat([
    { content: "THIS IS THE FIRST LINE", new: false },
    { content: "THIS IS THE SECOND LINE", new: false },
    { content: "THIS IS THE THIRD LINE", new: false },
  ]);

  const [dragBtn, setDragBtn] = useState(false);
  const [draggingIndex, setDraggingIndex] = (useState < number) | (null > null);
  const newInputRef = (useRef < HTMLTextAreaElement) | (null > null);

  const handleChange = (index, value) => {
    const newInputs = inputs.map((input, i) =>
      i === index ? { content: value, new: false } : input
    );
    setInputs(newInputs);
  };

  const handleNewInput = (index) => {
    const newInputs = inputs.map((input) => ({ ...input, new: false }));
    const updatedInputs = newInputs.toSpliced(index + 1, 0, {
      content: "",
      new: true,
    });
    setInputs(updatedInputs);
  };

  const keyDown = (event, index) => {
    if (event.key === "Enter" && !event.altKey) {
      event.preventDefault();
      handleNewInput(index);
    }
  };

  const handleHeightInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleDragStart = (index) => {
    if (dragBtn) {
      setDraggingIndex(index);
    }
  };

  const handleDragOver = (index, event) => {
    event.preventDefault();
    console.log(index, "DESIRE P");
    if (draggingIndex !== null && draggingIndex !== index) {
      console.log("not here");
      const updatedInputs = [...inputs];
      // find item
      const draggedItem = updatedInputs[draggingIndex];
      // remove item from original array
      updatedInputs.splice(draggingIndex, 1);
      // insert item at new index in updated array
      updatedInputs.splice(index, 0, draggedItem);
      // updates inputs with new position
      setInputs(updatedInputs);
      setDraggingIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggingIndex(null);
    setDragBtn(false);
  };

  useEffect(() => {
    if (newInputRef.current) {
      newInputRef.current.focus();
      newInputRef.current.select();
    }
  }, [inputs]);

  return (
    <>
      <section className="mt-4">
        {inputs.map((input, index) => (
          <div
            key={index}
            className="text-input relative"
            draggable={dragBtn} // Allow dragging only when dragBtn is true
            onDragStart={() => handleDragStart(index)}
            //JUST WHEN AN ELEMENT IS OVER THIS ELEMENT
            onDragOver={(event) => handleDragOver(index, event)}
            onDrop={handleDrop}
          >
            <article className="absolute top-0 left-0 show">
              <button className="w-8 text-4xl font-bold">+</button>
              <button
                onClick={() => setDragBtn(!dragBtn)}
                className={`btn-drag w-8 text-2xl ${
                  dragBtn ? "dragging" : ""
                } text-black`}
              >
                🖐️
              </button>
            </article>

            <textarea
              ref={input.new ? newInputRef : null}
              rows={1}
              className="text w-4/5 text-2xl p-0 border-none outline-0 ml-16 h-auto pl-1 resize-none input-note"
              value={input.content}
              onChange={(event) => handleChange(index, event.target.value)}
              onInput={handleHeightInput}
              onKeyDown={(event) => keyDown(event, index)}
              autoFocus={input.new}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default Note;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import DragAndDrop from "./DragElements";

// interface State {
//   content: string;
//   new: boolean;
// }

// function Note() {
//   const [inputs, setInputs] = useState<State[]>([
//     { content: "THIS IS THE FIRST LINE", new: false },
//     { content: "THIS IS THE SECOND LINE", new: false },
//     { content: "THIS IS THE THIRTH LINE", new: false },
//   ]);

//   const [dragBtn, setDragBtn] = useState(false);
//   const newInputRef = useRef<HTMLTextAreaElement | null>(null);

//   const handleChange = (index: number, value: string) => {
//     const newInputs = inputs.map((content, indexIn) =>
//       indexIn === index ? { content: value, new: false } : content
//     );

//     setInputs(newInputs);
//   };

//   const handleNewInput = (index: number) => {
//     const newInputs = inputs.map((input) => ({ ...input, new: false }));
//     //{ content: "", new: true }
//     const r = newInputs.toSpliced(index + 1, 0, { content: "", new: true });

//     setInputs(r);
//   };

//   const keyDown = (
//     event: React.KeyboardEvent<HTMLTextAreaElement>,
//     index: number
//   ) => {
//     if (event.key === "Enter" && !event.altKey) {
//       event.preventDefault();
//       handleNewInput(index);
//     }
//   };

//   const handleHeightInput = (e: any) => {
//     e.target.style.height = "auto";
//     e.target.style.height = `${e.target.scrollHeight}px`;
//   };

//   useEffect(() => {
//     if (newInputRef.current) {
//       newInputRef.current.focus();
//       newInputRef.current.select();
//     }

//     console.log(inputs);
//   }, [inputs]);

//   // const handleDragBtn = () => {
//   //   console.log("double click!");
//   //   setDragBtn(!dragBtn);
//   // };
//   return (
//     <>
//       <section className="mt-4">
//         {inputs.map((input, index) => {
//           return (
//             <div key={index} className="text-input relative  ">
//               {/* <section className="relative"> */}

//               <article className="absolute top-0 left-0 show">
//                 <button className="w-8 text-2xl">➕</button>
//                 <button
//                   // onDoubleClick={handleDragBtn}

//                   className={`btn-drag w-8 text-2xl ${
//                     dragBtn ? "dragging" : ""
//                   }`}
//                 >
//                   🖐️
//                 </button>
//               </article>

//               <textarea
//                 ref={input.new ? newInputRef : null}
//                 rows={1}
//                 className="text w-4/5 text-2xl p-0 border-none outline-0 ml-16 h-auto pl-1 resize-none input-note "
//                 value={input.content}
//                 onChange={(event) => handleChange(index, event.target.value)}
//                 onInput={handleHeightInput}
//                 onKeyDown={(event) => keyDown(event, index)}
//                 // index === inputs.length - 1
//                 autoFocus={input.new}
//               />
//               {/* </section> */}
//             </div>
//           );
//         })}
//       </section>
//       <DragAndDrop />
//     </>
//   );
// }

// export default Note;
