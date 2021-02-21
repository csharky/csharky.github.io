import bridge from '@vkontakte/vk-bridge';
import UrlParser from './UrlParser'

bridge.send("VKWebAppInit", {});

alert(UnityLoader.SystemInfo.browser);

function vkRecordPlayerScore(score)
{
    const parser = new UrlParser();
    parser.parseUri();

    try {
        const access_token = parser.getParam('access_token');
        const user_id = parser.getParam('viewer_id');

        bridge
        .send("VKWebAppApi", {
            "method": "secure.addAppEvent",
            "requestId": "updatedPlayerScore",
            "params": 
            {
                "user_id": user_id,
                "access_token": access_token,
                "activity_id": "2",
                "value": score
            }
        })
        .then(data => console.log(data.success))
        .catch(error => console.log(error));
    } catch (e) {
        console.log(e);
    }

    bridge.send("VKWebAppShowLeaderBoardBox", {user_result:score})
         .then(data => console.log(data.success))
        .catch(error => console.log(error));
}

window.vkRecordPlayerScore = vkRecordPlayerScore;
