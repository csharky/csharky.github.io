import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

function vkRecordPlayerScore(score)
{
    bridge.send("VKWebAppShowLeaderBoardBox", {user_result:score})
         .then(data => console.log(data.success))
        .catch(error => console.log(error));

    //ыUrlParser.
}

window.vkRecordPlayerScore = vkRecordPlayerScore;
