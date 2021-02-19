import bridge from '@vkontakte/vk-bridge';

console.log("test");

bridge.send("VKWebAppInit", {});

function vkRecordPlayerScore(score)
{
    console.log("wassup");ы
    /*bridge.send("VKWebAppShowLeaderBoardBox", {user_result:score})
         .then(data => console.log(data.success))
        .catch(error => console.log(error));*/
}