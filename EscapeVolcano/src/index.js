import bridge from '@vkontakte/vk-bridge';

console.log("test");

bridge.send("VKWebAppInit", {});

function vkRecordPlayerScore(score)
{
    bridge.send("VKWebAppShowLeaderBoardBox", {user_result:score})
         .then(data => console.log(data.success))
        .catch(error => console.log(error));
}

window.vkRecordPlayerScore = vkRecordPlayerScore;
