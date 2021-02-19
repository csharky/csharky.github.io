import bridge from './node_modules/@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

function vkRecordPlayerScore(score)
{
    console.log("wassup");
    /*bridge.send("VKWebAppShowLeaderBoardBox", {user_result:score})
         .then(data => console.log(data.success))
        .catch(error => console.log(error));*/
}