import Api from "/api.js";
import { appendListFlush, CreatePElement } from "/common-function.js";

class SignUpModal extends HTMLElement {
    connectedCallback() {
        //이미 생성돼 있어야하는 DOM
        const logContainer = document.querySelector('.logContainer');
        const signUp = document.querySelector("#signup-button");

        this.innerHTML = `
        <div id="signup-modal" class="modal">
            <div class="modal-content">
                <h2>회원가입</h2>
                <form id="signup-form" onsubmit="return false;">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"><br><br>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"><br><br>
                    <button type="submit">가입하기</button>
                </form>
                <button id="signup-modal-close">닫기</button>
            </div>
        </div>
        `;        
        const modal = document.querySelector("#signup-modal");
        const formElem = document.querySelector("#signup-form");
        const closeModalButton = document.querySelector("#signup-modal-close");

        //모달 띄우기
        signUp.addEventListener("click", async () => {
            modal.style.display = "block";
        })

        //모달 닫기
        closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
        });

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
            appendList.push(CreatePElement("### 회원가입 실행", "logRed"));
            appendList.push(CreatePElement(inputData));
            appendList.push(CreatePElement("@@@ 결과", "logBlue"));
            appendListFlush(logContainer, appendList);

            const response = await Api.signUp(formdata);
            appendList.push(CreatePElement(JSON.stringify(response)));
            appendListFlush(logContainer, appendList);
            
            //스크롤 하단으로 고정
            logContainer.scrollTop = logContainer.scrollHeight;
        }

    }
}

customElements.define("signup-modal", SignUpModal);