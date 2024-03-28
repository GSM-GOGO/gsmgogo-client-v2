import { useEffect, useState } from "react";
import HeaderContainer from "../../components/HeaderContainer/index.tsx";
import * as S from "./style.ts";
import { Search, SmallXIcon, XIcon } from "../../assets/index.ts";
import { useNavigate } from "react-router-dom";

interface Data {
  name: string;
  gender: string;
  normals: string[];
}

interface NormalType {
  normalSport: string;
  normalPeople: string;
  womanNum?: string;
  manNum?: string;
}

const NormalArr: NormalType[] = [
  {
    normalSport: "줄다리기",
    normalPeople: "0",
  },
  {
    normalSport: "농구 자유투 릴레이",
    normalPeople: "0",
  },
  {
    normalSport: "미션달리기",
    normalPeople: "0",
  },
  {
    normalSport: "6인 7각",
    normalPeople: "0",
  },
  {
    normalSport: "줄파도타기",
    normalPeople: "0",
  },
  {
    normalSport: "이어달리기",
    normalPeople: "0",
    womanNum: "1",
    manNum: "1",
  },
];

const dataArray: Data[] = [
  {
    name: "1101 김순자",
    gender: "man",
    normals: [],
  },
  {
    name: "1102 김덕자",
    gender: "woman",
    normals: [],
  },
  {
    name: "1103 김감자",
    gender: "man",
    normals: [],
  },
  {
    name: "1104 김승자",
    gender: "man",
    normals: [],
  },
  {
    name: "1105 김정희",
    gender: "woman",
    normals: [],
  },
  {
    name: "1106 김굽자",
    gender: "man",
    normals: [],
  },
  {
    name: "1107 김자자",
    gender: "man",
    normals: [],
  },
  {
    name: "1108 김주자",
    gender: "man",
    normals: [],
  },
  {
    name: "1109 김자주",
    gender: "woman",
    normals: [],
  },
  {
    name: "1110 김순순",
    gender: "man",
    normals: [],
  },
  {
    name: "1111 김덕덕",
    gender: "woman",
    normals: [],
  },
  {
    name: "1112 김감감",
    gender: "man",
    normals: [],
  },
  {
    name: "1113 김승승",
    gender: "man",
    normals: [],
  },
  {
    name: "1114 김정정",
    gender: "woman",
    normals: [],
  },
  {
    name: "1115 김굽굽",
    gender: "man",
    normals: [],
  },
  {
    name: "1116 김규구",
    gender: "man",
    normals: [],
  },
  {
    name: "1117 김샤샷",
    gender: "man",
    normals: [],
  },
  {
    name: "1118 김굳굳",
    gender: "woman",
    normals: [],
  },
];

const MAX_MEMBERS = {
  축구: 8,
  배드민턴: 2,
  배구: 9,
};

const Register = () => {
  const [selectedSport, setSelectedSport] = useState("축구");
  const [selectedInput, setSelectedInput] = useState("");
  const [teamName, setTeamName] = useState("");
  const [searchedName, setSearchedName] = useState("");
  const [searchResults, setSearchResults] = useState<Data[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<Data[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const goSports = () => {
    let sportPath = "";
    if (selectedSport === "축구") {
      sportPath = "soccer";
    } else if (selectedSport === "배드민턴") {
      sportPath = "badminton";
    } else if (selectedSport === "배구") {
      sportPath = "volleyball";
    }
    navigate(`/register/${sportPath}`, {
      state: {
        selectedSport: sportPath,
        teamName: teamName,
        selectedMembers: selectedMembers.map((member) => member.name),
      },
    });
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      const modal = document.querySelector(".clickedNormal");
      if (
        modal &&
        !modal.contains(e.target) &&
        e.target.closest(".clickedNormal") === null
      ) {
        setIsModalVisible(false);
      }
    };

    if (isModalVisible) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalVisible]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const foundNames = dataArray.filter((data) =>
        data.name.includes(searchedName)
      );
      setSearchResults(foundNames);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchedName]);

  const handleSportSelection = (sport: string) => {
    setSelectedSport(sport);
    setSelectedInput(""); // 팀 이름 input과 팀 검색 input 초기화
    setTeamName(""); // 팀 이름 초기화
    setSearchedName(""); // 팀 검색 input 초기화
    setSearchResults([]); // 검색 결과 초기화
    setSelectedMembers([]);
  };

  const handleInputSelection = (input: string) => {
    setSelectedInput(input);
  };

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.slice(0, 7);
    setTeamName(newName);
  };

  const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedName = e.target.value.replace(/[^\uAC00-\uD7A3]/gi, "");
    setSearchedName(searchedName);
    // 검색어가 비어 있는 경우에도 모든 데이터를 보여주도록 설정
    if (searchedName === "") {
      setSearchResults(dataArray);
    }
  };

  const handleMemberClick = (member: Data) => {
    if (selectedMembers.length < MAX_MEMBERS[selectedSport]) {
      if (!selectedMembers.some((selected) => selected.name === member.name)) {
        setSelectedMembers([...selectedMembers, member]);
      }
    }
  };

  const handleRemoveMember = (member: Data) => {
    setSelectedMembers(
      selectedMembers.filter((selected) => selected !== member)
    );
  };

  const dividedSelectedMembers: Data[][] = [];
  for (let i = 0; i < selectedMembers.length; i += 4) {
    dividedSelectedMembers.push(selectedMembers.slice(i, i + 4));
  }

  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{ color: "var(--White, #FFF)" }}>
                팀 추가
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse>
              <S.SubjectContainer>
                <S.SubjectText>종목</S.SubjectText>
                <S.SubjectBox>
                  <S.SubjectOne
                    onClick={() => handleSportSelection("축구")}
                    style={
                      selectedSport === "축구"
                        ? {
                            border: "1px solid var(--Main, #23F69A)",
                            background: "rgba(35, 246, 154, 0.10)",
                          }
                        : undefined
                    }
                  >
                    <S.SubjectOneText
                      style={
                        selectedSport === "축구"
                          ? { color: "var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      축구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne
                    onClick={() => handleSportSelection("배드민턴")}
                    style={
                      selectedSport === "배드민턴"
                        ? {
                            border: "1px solid var(--Main, #23F69A)",
                            background: "rgba(35, 246, 154, 0.10)",
                          }
                        : undefined
                    }
                  >
                    <S.SubjectOneText
                      style={
                        selectedSport === "배드민턴"
                          ? { color: "var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      배드민턴
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne
                    onClick={() => handleSportSelection("배구")}
                    style={
                      selectedSport === "배구"
                        ? {
                            border: "1px solid var(--Main, #23F69A)",
                            background: "rgba(35, 246, 154, 0.10)",
                          }
                        : undefined
                    }
                  >
                    <S.SubjectOneText
                      style={
                        selectedSport === "배구"
                          ? { color: "var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      배구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne
                    onClick={() => handleSportSelection("일반경기")}
                    style={
                      selectedSport === "일반경기"
                        ? {
                            border: "1px solid var(--Main, #23F69A)",
                            background: "rgba(35, 246, 154, 0.10)",
                          }
                        : undefined
                    }
                  >
                    <S.SubjectOneText
                      style={
                        selectedSport === "일반경기"
                          ? { color: "var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      일반경기
                    </S.SubjectOneText>
                  </S.SubjectOne>
                </S.SubjectBox>
              </S.SubjectContainer>
              {selectedSport !== "일반경기" ? (
                <>
                  <S.TeamInputContainer>
                    <S.SubjectText>팀 이름</S.SubjectText>

                    <S.TeamInputBox
                      onClick={() => handleInputSelection("name")}
                      style={
                        selectedInput === "name"
                          ? { border: "1px solid var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      <S.TeamInput
                        type="text"
                        placeholder="팀 이름은 최대 8글자 입니다"
                        value={teamName}
                        onChange={handleTeamNameChange}
                      />
                      <S.TeamInputText style={{ color: "var(--White, #FFF)" }}>
                        팀
                      </S.TeamInputText>
                    </S.TeamInputBox>
                  </S.TeamInputContainer>

                  <S.TeamInputContainer>
                    <S.SubjectText>팀원</S.SubjectText>
                    {dividedSelectedMembers.map((group, groupIndex) => (
                      <S.MemberSelected key={groupIndex}>
                        {group.map((member, index) => (
                          <S.MemberSelectList key={index}>
                            <S.MemberName>{member.name}</S.MemberName>
                            <div
                              style={{ cursor: "pointer", display: "flex" }}
                              onClick={() => handleRemoveMember(member)}
                            >
                              <XIcon />
                            </div>
                          </S.MemberSelectList>
                        ))}
                      </S.MemberSelected>
                    ))}

                    <S.TeamInputBox
                      onClick={() => handleInputSelection("member")}
                      style={
                        selectedInput === "member"
                          ? { border: "1px solid var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      <S.TeamInput
                        type="text"
                        placeholder="이름으로 검색하세요"
                        onChange={handleSearchNameChange}
                      />
                      <div style={{ cursor: "pointer" }}>
                        <Search />
                      </div>
                    </S.TeamInputBox>
                  </S.TeamInputContainer>
                  {searchedName !== "" && searchResults.length > 0 && (
                    <S.overScroll style={{ height: "22.5em" }}>
                      {searchResults.map((result, index) => (
                        <S.MapTeamMember
                          key={index}
                          onClick={() => handleMemberClick(result)}
                        >
                          <S.MemberList>{result.name}</S.MemberList>
                        </S.MapTeamMember>
                      ))}
                    </S.overScroll>
                  )}
                </>
              ) : (
                <S.NormalTeamContainer style={{ overflow: "hidden" }}>
                  <S.TeamAssign>
                    <S.SubjectText>팀 배정</S.SubjectText>
                    <S.TeamAssignSpan>
                      클릭한 뒤 원하는 종목을 배정할 수 있어요
                    </S.TeamAssignSpan>
                  </S.TeamAssign>

                  <S.TeamInputContainer>
                    <S.TeamInputBox
                      onClick={() => handleInputSelection("member")}
                      style={
                        selectedInput === "member"
                          ? { border: "1px solid var(--Main, #23F69A)" }
                          : undefined
                      }
                    >
                      <S.TeamInput
                        type="text"
                        placeholder="이름으로 검색하세요"
                        onChange={handleSearchNameChange}
                      />
                      <div style={{ cursor: "pointer" }}>
                        <Search />
                      </div>
                    </S.TeamInputBox>
                  </S.TeamInputContainer>

                  <S.overScroll>
                    {isModalVisible && (
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <S.clickedNormal style={{ position: "absolute" }}>
                          <S.NormalObject>
                            {NormalArr.map((item, index) => (
                              <S.MappingText
                                key={index}
                                onClick={() => {
                                  console.log(item);
                                }}
                              >
                                <S.OneNormalObj>
                                  <S.OneNormalText>
                                    {item.normalSport}
                                  </S.OneNormalText>
                                  <S.OneNormalText>
                                    {`${item.normalPeople}/30`}
                                  </S.OneNormalText>
                                </S.OneNormalObj>
                              </S.MappingText>
                            ))}
                          </S.NormalObject>
                        </S.clickedNormal>
                      </div>
                    )}

                    {searchedName === "" || searchResults.length === 0
                      ? dataArray.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              console.log(item); // 선택한 요소 정보 출력
                              toggleModal();
                            }}
                          >
                            <S.MapTeamMember
                              style={{ justifyContent: "space-between" }}
                            >
                              <S.MemberList>{item.name}</S.MemberList>
                              <S.OneNormalContainer
                                style={{ cursor: "default" }}
                              >
                                <S.OneNormalText>6인 7각</S.OneNormalText>
                                <div
                                  style={{
                                    display: "flex",
                                    cursor: "pointer",
                                    justifyContent: "center",
                                  }}
                                >
                                  <SmallXIcon />
                                </div>
                              </S.OneNormalContainer>
                            </S.MapTeamMember>
                          </div>
                        ))
                      : searchResults.map((result, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              console.log(result); // 선택한 요소 정보 출력
                              toggleModal();
                            }}
                          >
                            <S.MapTeamMember
                              style={{ justifyContent: "space-between" }}
                            >
                              <S.MemberList>{result.name}</S.MemberList>
                              <S.OneNormalContainer
                                style={{ cursor: "default" }}
                              >
                                <S.OneNormalText>6인 7각</S.OneNormalText>
                                <div
                                  style={{
                                    display: "flex",
                                    cursor: "pointer",
                                    justifyContent: "center",
                                  }}
                                >
                                  <SmallXIcon />
                                </div>
                              </S.OneNormalContainer>
                            </S.MapTeamMember>
                          </div>
                        ))}
                  </S.overScroll>
                </S.NormalTeamContainer>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20rem",
                }}
              >
                <S.FormationBtn
                  disabled={
                    selectedMembers.length !== MAX_MEMBERS[selectedSport] ||
                    teamName === ""
                  }
                  onClick={goSports}
                  style={{
                    backgroundColor:
                      selectedMembers.length === MAX_MEMBERS[selectedSport] &&
                      teamName !== ""
                        ? "var(--Main, #23F69A)"
                        : undefined,
                    cursor:
                      selectedMembers.length === MAX_MEMBERS[selectedSport] &&
                      teamName !== ""
                        ? "pointer"
                        : "not-allowed",
                  }}
                >
                  <S.FormationText
                    style={{
                      color:
                        selectedMembers.length === MAX_MEMBERS[selectedSport] &&
                        teamName !== ""
                          ? "var(--Black, #1C1C1F)"
                          : "undefined",
                    }}
                  >
                    {selectedSport !== "일반경기"
                      ? "포메이션 짜기"
                      : "등록하기"}
                  </S.FormationText>
                </S.FormationBtn>
              </div>
            </S.ContainerResponse>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};

export default Register;
