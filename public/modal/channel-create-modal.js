import Api from "/api.js";
import { appendListFlush, CreatePElement } from "/common-function.js";

// modalName 소문자 + 하이픈으로만 작성해주세요~
const modalName = "channel-create";

class ChannelCreateModal extends HTMLElement {
    connectedCallback() {
        //이미 생성돼 있어야하는 DOM
        const logContainer = document.querySelector('.logContainer');
        const button = document.querySelector(`#${modalName}-button`);

        this.innerHTML = `
        <div id="${modalName}-modal" class="modal">
            <div class="modal-content">
                <h2>채널 추가</h2>
                <form id="${modalName}-form" onsubmit="return false;">
                    <label for="channelName">channelName:</label>
                    <input type="channelName" id="channelName" name="channelName"><br><br>

                    <label for="channelDescription">channelDescription:</label>
                    <input type="channelDescription" id="channelDescription" name="channelDescription"><br><br>
                    
                    <label for="channelPassword">channelPassword:</label>
                    <input type="channelPassword" id="channelPassword" name="channelPassword"><br><br>

                    <button type="submit">채널 추가</button>
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
            appendList.push(CreatePElement("### 채널가입 실행", "logRed"));
            appendList.push(CreatePElement(inputData));
            appendList.push(CreatePElement("@@@ 결과", "logBlue"));
            appendListFlush(logContainer, appendList);

            const response = await Api.channelCreate(formdata);
            appendList.push(CreatePElement(JSON.stringify(response)));
            appendListFlush(logContainer, appendList);

            //스크롤 하단으로 고정
            logContainer.scrollTop = logContainer.scrollHeight;
        }

    }
}

customElements.define(`${modalName}-modal`, ChannelCreateModal);