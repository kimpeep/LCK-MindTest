const qnaList = [
  {
    q: '1. 하루 일과를 끝마친 후, 게임을 켰다. <br> 처음 할 일은...',
    a: [
      { answer: '다같이 하하호호 게임해야지! <br> 디스코드 켜서 접속 중인 친구를 찾는다.', type: [0,2,3,4,5] },
      { answer: '인생은 원래 혼자야! <br>게임 접속해 혼자 광활한 맵을 돌아다닌다.', type: [1,6,7,8,9] },
    ]
  },
  {
    q: '2. 새로운 챔피언이 나온다는 공지를 봤다. <br> 이때 나는...',
    a: [
      { answer: '설렌다! 이걸로 어떤 슈퍼플레이 할지 상상하며 <br> 출시일을 기다린다.', type: [0,2,5,8,9] },
      { answer: '새로운 챔피언이 나와도 달라질 건 없다. <br> 난 나만의 길을 간다.', type: [1,3,4,6,7] },
    ]
  },
  {
    q: '3. 열심히 게임을 하다가 <br> 꼭 해야 할 일이 생각났다. 이때 나는...',
    a: [
      { answer: '일단 지금은 이 판이 더 중요하다. <br> 쿨하게 미룬다.', type: [0,1,4,5,7,8] },
      { answer: '게임 끄고 먼저 할 일을 해치우고 <br> 편한 마음으로 다시 접속한다.', type: [2,3,6,9] },
    ]
  },
  {
    q: '4. 드디어 새로운 시즌이 찾아왔다. <br> 이때 나는...',
    a: [
      { answer: '메타 분석글을 읽고 준비를 끝낸 후 실전에 뛰어든다.', type: [0,2,4,5] },
      { answer: '메타는 원래 맞으면서 배우는 것이다. <br> 일단 실전에 돌입한다.', type: [1,3,6,7,8,9] },
    ]
  },
  {
    q: '5. 게임 실력을 키우기 위해 나는...',
    a: [
      { answer: '이론부터 철저해야 한다. <br> 유튜브와 분석글을 모두 섭렵한다.', type: [0,4,5,9] },
      { answer: '경험이 곧 실력이다. 플레이를 많이 해 본다.', type: [1,2,3,6,7,8]},
    ]
  },
  {
    q: '6. 게임을 할 때 나의 마음가짐은...',
    a: [
      { answer: '게임은 이기기 위해 하는 것이다.', type: [0,2,3,8] },
      { answer: '게임은 남들 킹받게 만들려고 하는 것이다.', type: [1,4,5,6,7,9] },
    ]
  },
  {
    q: '7. 열심히 게임을 하는데 아무래도 각이 안 보인다.<br>  이때 나는...',
    a: [
      { answer: '대충 끝내고 다음 판을 기약한다.', type: [1,3,6,7,9] },
      { answer: '나에겐 포기란 없다. <br> 이기겠다는 마음가짐으로 임한다.', type: [0,2,4,5,8] },
    ]
  },
  {
    q: '8. 누가 나한테 시비를 걸었다. 이 때 나는...',
    a: [
      { answer: '열반에 오른 심정으로 <br> 저 중생을 갸륵히 여겨 무시한다.', type: [2,3,6,7,8,9] },
      { answer: '눈에는 눈, 이에는 이다. <br> 똑같이 시비를 턴다.', type: [0,4,5] },
    ]
  },
  {
    q: '9. 아무리 생각해도 내가 이 판 캐리했다. <br> 이때 나는...',
    a: [
      { answer: '모두들 나를 봐줘! <br> 이 세상 사람들이 다 알도록 자랑한다.', type: [0,1,2,4,5,6] },
      { answer: '그럴 리 없다는 걸 안다. <br> 빨리 겸손을 찾고 마음 속에 묻어둔다.', type: [3,7,8,9] },
    ]
  },
  {
    q: '10. 게임할 때 나에게 중요한 건... ',
    a: [
      { answer: '무얼 하든지 남는 건 결과다. 좋은 결과를 내야 한다.', type: [0,2,3,4,5,8] },
      { answer: '결과보다는 노력이 중요하다. <br> 포기하지 않는 내 모습 참 좋다.', type: [1,7,6,9] },
    ]
  },
  {
    q: '11. 이거 한타 각인가? <br> 헷갈리는 상황에서 나는...',
    a: [
      { answer: '틀릴 수도 있지만, 아무튼 한타다. 일단 간다.', type: [0,2,3,4,5,6,8] },
      { answer: '위험한 선택을 할 수는 없다. 상황을 한번 더 살핀다.', type: [1,7,9] },
    ]
  },
  {
    q: '12. 내 생각대로 게임이 흘러가지 않는다. <br> 여기서 나는...',
    a: [
      { answer: '빠르게 다른 방법을 모색해 대응한다.', type: [0,2,5] },
      { answer: '우왕좌왕하다 스트레스를 받는다.', type: [1,3,4,6,7,8,9] },
    ]
  },
  {
    q: '13. 게임을 하다가 실수했다. 이럴 때 나는...',
    a: [
      { answer: '아무튼 내 책임 아니다. 꼬우면 니가 잘하시든가~', type: [0,1,4,7,8] },
      { answer: '이래서 솔플 아닌 게임은 싫다. 자책한다.', type: [2,3,5,6,9] },
    ]
  },
]

const infoList = [
  {
    name: '참신한 아이디어와 실행력의 <br> 담원 민트',
    desc: '새로운 판을 만드는 야심가로 이를 위해 엄청난 추진력을 보여줘요! <br> 창의적인 시선으로 새로운 가능성을 보고 임기응변을 잘한답니다. <br>  언제나 남들과는 다르게! 주류를 따르기 보단 비주류를 선호하는 타입이에요. <br> 중요한 기회가 찾아오면 놓치지 않는 판단 능력을 가지고 있어요. <br> 능력은 뛰어나지만, 이를 과신해 무리를 하거나 종종 불안한 모습을 보이기도 해요.'
  },
  {
    name: '스릴을 즐기는 낭만의 <br> 샌드박스 옐로우',
    desc: '스릴이 최고! 안정적인 상태보단 예측 불가능한 게 더 재밌어요. <br> 불리한 상황에서도 정면돌파하는 화끈함을 가지고 있어요. <br> 호전적인 성격이라 피하기 보다는 맞서 싸우는 경우가 많아요. <br> 하이리스크 하이리턴! 위험을 감수하고 큰 이익을 보려고 해요. <br> 감정적이고 멘탈이 약해 스트레스를 받으면 기복이 심해지는 편이에요.'
  },
  {
    name: '안될 것 같은데 해내는 증명의 <br> 티원 레드',
    desc: '설정한 목표 그 이상의 것을 원하고 이를 해내는 수완가가 나예요! <br> 이름만 들어도 누구나 다 아는 엄청난 인싸로 공사가 다망해요. <br> 징크스? 그게 뭐죠? 자기 능력에 대한 믿음이 강해요. <br> 처음에 약한 모습을 보여도 끝에는 다시 일어서서 능력을 다 발휘해요.<br> 중요한 순간에서 당황해 판단을 잘못하는 모습을 보이기도 해요.'
  },
  {
    name: '언제나 신중하고 안정적인 노력의 <br> 젠지 골드',
    desc: '불안한 건 싫어! 언제나 안정적인 상황을 선호해요. <br> 실력을 이기는 건 노력! 피나는 노력으로 목표를 달성하고자 해요. <br> 자기만의 스타일을 확고히 밀고 나가는 사람이에요. <br> 한결 같은 모습에 종종 노잼 인간같은 모습도 보이는 편이에요. <br> 능력은 좋으나 고집이 센 편이라 그에 맞는 결과를 얻지 못하기도 해요.'
  },
  {
    name: '약하지만 강한 매운 맛의 <br> 레드포스 스칼렛',
    desc: '한 번 기회를 잡으면 놓치지 않고 달려들어 큰 수확을 얻어요! <br> 겉은 약해보이지만, 그 안은 단단한 외유내강형 캐릭터예요. <br>함께라면 무섭지 않아! 남과 협력할 때 가장 단단해져요. <br> 확실한 약점이 있으나 이를 무마할 실력이 있어요. <br> 전략적으로 문제를 해결하는 능력이 약간 부족한 편이에요.'
  },
  {
    name: '능력은 있으나 조금 게으른 <br> 디알엑스 블루',
    desc: '내가 바로 게으른 천재! 능력은 있으나 문제도 있어요. <br> 많은 사람에게 인기가 있는 편이에요. <br> 느긋하게 있다가 발등에 불이 떨어지면 시작해요. <br> 부진에 빠지면 헤어나오는데 조금 오래 걸려요. <br> 자기 실력을 과신하다 가끔 문제를 일으키기도 해요.'
  },
  {
    name: '언제나 명확한 균형의 수호자 <br> 프릭스 루티어스',
    desc: '중간은 하자! 착실하게 중간을 지키기 위해 노력해요. <br>어떠한 상황에서도 변수를 만들어 이를 활용하는 걸 잘해요. <br> 장인 정신이 있어 잘하는 건 기가 막히게 사용할 수 있어요. <br> 계획 세울 때 차선안도 같이 준비해 갑작스러운 상황에 대비하곤 해요. <br> 원래 잘하던 게 아닌 새로운 것에 도전하는 걸 기피하는 편이에요.'
  },
  {
    name: '아쉽지만 가능성의 <br> 롤스터 크림슨',
    desc: '결과도 중요하지만, 과정 또한 중요하게 여겨요.  <br> 한번의 기회를 노리기 보단 안정적인 투자를 하려 해요.  <br> 다양한 경험을 하여 노련한 모습을 보이는 편이에요. <br> 계획을 세울 때 실험 정심을 발휘하는 모습을 보여줘요.  <br> 종종 이해하기 힘들거나 우유부단한 선택을 하기도 해요.'
  },
  {
    name: '하나의 드라마를 쓴 기적의 <br> 한화 오렌지',
    desc: '이것이 원맨쇼? 답답한 상황에서 혼자 고군분투하곤 해요. <br> 운이 따르는 편이라 생각보다 좋은 결과를 얻는 편이에요. <br>잘할 때마다 주변에서 칭찬과 환호성을 해주는 걸 즐겨요. <br>포기를 모르는 성격이라 끈질긴 모습을 자주 보여줘요. <br>결과에 대한 피드백이 부족해 똑같은 실수를 범할 때도 있어요.'
  },
  {
    name: '효율성을 추구하는 집중의 <br> 브리온 그린',
    desc: '열악한 상황 속에서 최고의 능력을 발휘하려고 노력해요. <br> 자기객관화를 잘해 이를 기반으로 문제를 해결하려고 해요. <br> 결과가 뻔히 보이는 상황에도 긍정적인 태도를 잃지 않아요. <br> 단순하지만 효율적인 계획을 세우고 이를 확실히 실천하는 편이에요. <br> 경험이 다소 부족해 종종 자기의 발목을 잡곤 해요.'
  },
]