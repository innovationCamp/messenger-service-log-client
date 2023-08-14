import Api from "/api.js";
import { appendListFlush, CreatePElement } from "/common-function.js";

// modalName 소문자 + 하이픈으로만 작성해주세요~
const modalName = "channel-participant";

<<<<<<< Updated upstream
class ChannelCreateModal extends HTMLElement {
=======
class ChannelParticipantModal extends HTMLElement {
>>>>>>> Stashed changes
    connectedCallback() {
        //이미 생성돼 있어야하는 DOM
        const logContainer = document.querySelector('.logContainer');
        const button = document.querySelector(`#${modalName}-button`);

        this.innerHTML = `
        <div id="${modalName}-modal" class="modal">
            <div class="modal-content">
                <h2>채널 참여</h2>
                <form id="${modalName}-form" onsubmit="return false;">
<<<<<<< Updated upstream
                    <label for="channelId">channelId:</label>
                    <input type="channelId" id="channelId" name="channelId"><br><br>

                    <button type="submit">채널 참여</button>
=======
                    <label for="channelId">ChannelId:</label>
                    <input type="channelId" id="channelId" name="channelId"><br><br>
                    <button type="submit">참여하기</button>
>>>>>>> Stashed changes
                </form>
            </div>
        </div>
        `;
        const modal = document.querySelector(`#${modalName}-modal`);
        const formElem = document.querySelector(`#${modalName}-form`);

        //모달 띄우기
        button.addEventListener("click", async () => {
            modal.style.display = "block";
        })

        //모달 닫기
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        //formdata.get은 name 속성 기준
        formElem.onsubmit = async (e) => {
            e.preventDefault();
            const appendList = [];

            const formdata = new FormData(formElem);
            const inputData = JSON.stringify(Object.fromEntries(formdata));

            appendList.push(document.createElement("br"));
            appendList.push(CreatePElement("### 채널참여 실행", "logRed"));
            appendList.push(CreatePElement(inputData));
            appendList.push(CreatePElement("@@@ 결과", "logBlue"));
            appendListFlush(logContainer, appendList);

<<<<<<< Updated upstream
            const response = await Api.channelParticipant(formdata.get("channelId"));
            appendList.push(CreatePElement(JSON.stringify(response)));
            appendListFlush(logContainer, appendList);

            // //스크롤 하단으로 고정
=======
            const response = await Api.channelParticipant(formdata);
            appendList.push(CreatePElement(JSON.stringify(response)));
            appendListFlush(logContainer, appendList);

            //스크롤 하단으로 고정
>>>>>>> Stashed changes
            logContainer.scrollTop = logContainer.scrollHeight;
        }

    }
}

<<<<<<< Updated upstream
customElements.define(`${modalName}-modal`, ChannelCreateModal);
=======
customElements.define(`${modalName}-modal`, ChannelParticipantModal);
>>>>>>> Stashed changes