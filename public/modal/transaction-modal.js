import Api from "/api.js";
import { appendListFlush, CreatePElement } from "/common-function.js";

// modalName 소문자로만 작성해주세요~
const modalName = "transaction";

class TransactionModal extends HTMLElement {
    connectedCallback() {
        //이미 생성돼 있어야하는 DOM
        const logContainer = document.querySelector('.logContainer');
        const button = document.querySelector(`#${modalName}-button`);

        this.innerHTML = `
        <div id="${modalName}-modal" class="modal">
            <div class="modal-content">
                <h2>송금</h2>
                <form id="${modalName}-form" onsubmit="return false;">
                    <label for="walletId">WalletId:</label>
                    <input type="walletId" id="walletId" name="walletId"><br><br>
                    <label for="targetWalletId">targetWalletId:</label>
                    <input type="targetWalletId" id="targetWalletId" name="targetWalletId"><br><br>
                    <label for="amount">Amount:</label>
                    <input type="amount" id="amount" name="amount"><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"><br><br>
                    <button type="submit">송금하기</button>
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
            appendList.push(CreatePElement("### 송금 실행", "logRed"));
            appendList.push(CreatePElement(inputData));
            appendList.push(CreatePElement("@@@ 결과", "logBlue"));
            appendListFlush(logContainer, appendList);

            const response = await Api.transaction(formdata);
            appendList.push(CreatePElement(JSON.stringify(response)));
            appendListFlush(logContainer, appendList);

            //스크롤 하단으로 고정
            logContainer.scrollTop = logContainer.scrollHeight;
        }

    }
}

customElements.define(`${modalName}-modal`, TransactionModal);