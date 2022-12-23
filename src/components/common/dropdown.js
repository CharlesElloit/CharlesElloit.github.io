import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import {
  OpenFoleder as Icon,
  ArrowDownIcon,
  DeleteIcon,
  Menu,
  Excel,
} from "assets/icons";
import { useOnHoverOutside } from "hooks/useOnHoverOutside";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const SubDropDownRef = createRef(null);
  const inputRef = useRef(null);

  // close submenu on hover
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(SubDropDownRef, closeHoverMenu);

  const listener = (evt) => {
    // if (dropdownRef.current?.contains(evt.target)) {
    //   return;
    // }
  };

  const toggleModel = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("click", listener);
    window.onkeydown = function (evt) {
      if (evt.keyCode && evt.keyCode === 27) {
        setOpen(false);
      }
    };

    return () => window.removeEventListener("click", listener);
  }, []);

  const openFileExplorer = () => {
    inputRef.current.click();
  };

  return (
    <MenuContainer>
      <Menu
        onClick={toggleModel}
        style={{ marginRight: 15, cursor: "pointer" }}
        width={24}
        height={24}
        color="#c7c7c7"
      />
      {open && (
        <Dropdown ref={dropdownRef}>
          <UnorderedList>
            <DropdownItem
              onClick={openFileExplorer}
              Icon={Icon}
              text="Open"
              color="#292D32"
              shortcut="Ctrl+o"
              submenu={false}
            />
            <input type="file" ref={inputRef} style={{ display: "none" }} />
            <DropdownItem
              Icon={ArrowDownIcon}
              text="Save to.."
              shortcut="Ctrl+o"
              color="#292D32"
              submenu={false}
            />
            <DropdownItem
              ref={SubDropDownRef}
              submenu={isMenuDropDownOpen}
              onMouseOver={() => setMenuDropDownOpen(true)}
              Icon={Icon}
              text="Export as"
              shortcut="Ctrl+o"
            />
            <DropdownItem
              onClick={() => console.log("Hello from Edit issue")}
              Icon={Icon}
              text="Edit issue"
              shortcut="Ctrl+e"
              color="#292D32"
              submenu={false}
            />
            <DropdownItem
              Icon={DeleteIcon}
              text="Delete issue"
              shortcut="Ctrl+d"
              color="#EE4949"
              textColor="#EE4949"
            />
          </UnorderedList>
        </Dropdown>
      )}
    </MenuContainer>
  );
};

const DropdownItem = forwardRef(
  (
    { Icon, text, shortcut, onClick, color, textColor, submenu, ...props },
    ref
  ) => {
    return (
      <>
        <DropdownItemELement ref={ref} {...{ onClick, ...props }}>
          <Left>
            <Icon width={20} height={20} {...{ color }} />
            <ItemLink {...{ color, textColor }}>{text}</ItemLink>
          </Left>
          <Right>
            <Text>{shortcut}</Text>
          </Right>
        </DropdownItemELement>
        {submenu && <SubDropDown />}
      </>
    );
  }
);

const submenu = [
  { text: "Excel", shortcut: "Ctrl+shift+e" },
  { text: "Excel", shortcut: "Ctrl+shift+e" },
];

const SubDropDown = ({ color, textColor, text, shortcut, ...props }) => {
  return (
    <SubMenu {...props}>
      {submenu.map((item, index) => (
        <DropdownItemELement key={index}>
          <Left>
            <Excel width={20} height={20} />
            <ItemLink {...{ color, textColor }}>{item.text}</ItemLink>
          </Left>
          <Right>
            <Text>{item.shortcut}</Text>
          </Right>
        </DropdownItemELement>
      ))}
    </SubMenu>
  );
};

const MenuContainer = styled.div``;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  font-size: 14px;
  color: #28313e;
`;

const Text = styled.span``;

const Dropdown = styled.div`
  position: absolute;
  background-color: #131821;
  border-radius: 6px;
  padding: 10px 0px;
  width: 250px;
  margin-top: 15px;
  right: 337px;
  border: 1px solid #1a2027;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.1s;
  filter: drop-shadow(2px 2px 3px #0d1117);
  ::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 8px;
    height: 20px;
    width: 20px;
    background-color: #131821;
    transform: rotate(45deg);
  }
`;

const UnorderedList = styled.ul`
  padding: 8px;
`;

const DropdownItemELement = styled.li`
  width: 100%;
  padding: 7px 5px 7px 0;
  align-items: center;
  // margin: 0px 5px 0 0;
  list-style: none;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1a2027;
  :hover {
    background: #1a2027;
    // margin: 5px;
  }
`;

const ItemLink = styled.a`
  text-decoration: none;
  margin-left: 0.5rem;
  font-size: 14px;
  color: ${(props) => props.textColor};
`;

const SubMenu = styled.div`
  width: 200px;
  // height: ;
  padding: 10px;
  position: absolute;
  left: 220px;
  top: 110px;
  background: #131821;
  border-radius: 6px;
  border: 1px solid #1a2027;
  // box-shadow: 3px 2px 3px #1a2027;
  filter: drop-shadow(2px 2px 3px #1a2027 0.5);
`;

export default DropdownMenu;
