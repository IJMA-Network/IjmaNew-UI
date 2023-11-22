import React, { useRef, useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import "../TermSheet/TermSheet.css";
import axios from "axios";
import { createTerm } from "../../Api/api";
import StoreContext from "../../ContextApi";

import { EditorState, convertToRaw, ContentState,convertFromRaw  } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import the CSS

export default function ContractSheet() {
  const contextData = useContext(StoreContext);
  const [bank, setBank] = useState({ accountName: "Bank1" });
  //   const [NodeName, setNodeName] = useState("ABC Bank");
  //   const [users, setUsers] = useState([]);

  const Client = useRef();
  const Expire = useRef();
  const Refrense = useRef();
  const FacilityType = useRef();
  const Limit = useRef();
  const Tenor = useRef();
  const Rate = useRef();
  const Spread = useRef();
  // const bank = useRef();

  // console.log(contextData, "SignInData");

  useEffect(() => {
    setBank(contextData.SignInData);
  }, [contextData.SignInData]);

  const FormSubmit = () => {
    var profitRate = {
      referenceRate: Rate.current.value,
      spread: Spread.current.value,
    };

    var data = {
      bank: bank.UserAccountNo,
      client: Client.current.value,
      termsheetReference: Refrense.current.value,
      facilityType: FacilityType.current.value,
      limit: Limit.current.value,
      tenor: Tenor.current.value,
      profitRate: profitRate,
      expiry: Expire.current.value,
    };
    // const myJSON = JSON.stringify(data);

    // console.log(data, "dataaa");
    createTerm(data);
  };

  const content = {
    entityMap: {},
    blocks: [
      {
        key: '637gr',
        text: 'Initialized from content state.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  };

 
  
  // const initialHtml = "";
  const initialHtml = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
  const [editorState, setEditorState] = useState(() => {
    const contentBlock = htmlToDraft(initialHtml);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  let getlocalStorage = JSON.parse(localStorage.getItem("items"))
  console.log(getlocalStorage);
  
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    if (editorState) {
      const htmlContent = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      // console.log(htmlContent); // Log the converted HTML content
    }
  }, [editorState]);

  const handlerDomiText = () => {
    // console.log();
    // console.log(editorState);
    localStorage.setItem("items", JSON.stringify(editorState));
    // Log the converted HTML content
  };
  return (
    <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 ">
          <h3 className="text-center">Contract Term Sheet</h3>
          <div>
            <form>
              <div style={{ background: "yellow" }}>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerDomiText();
                }}
              >
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
