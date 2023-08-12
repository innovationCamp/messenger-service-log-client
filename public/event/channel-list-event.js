import Api from "/api.js";
import { appendListFlush, CreatePElement } from "/common-function.js";

const buttonName = "channel-list";

const logContainer = document.querySelector('.logContainer');
const button = document.querySelector(`#${buttonName}-button`);
button.addEventListener("click", async (e) => {
    const appendList = [];
    appendList.push(document.createElement("br"));
    appendList.push(CreatePElement("### 참여중 채널 조회 실행", "logRed"));
    appendList.push(CreatePElement("@@@ 결과", "logBlue"));

    const response = await Api.channelList();
    appendList.push(CreatePElement(JSON.stringify(response)));
    appendListFlush(logContainer, appendList);

    // //스크롤 하단으로 고정
    logContainer.scrollTop = logContainer.scrollHeight;
})
