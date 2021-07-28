import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Table,
  Tag,
  Space,
  Button,
  Radio,
  Typography,
  Drawer,
  Divider,
  Col,
  Row,
  PageHeader
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { CSVLink, CSVDownload } from "react-csv";
import { makeStyles } from "@material-ui/core/styles";
import "antd/dist/antd.css";
const { Text, Link, Title } = Typography;
const useStyles = makeStyles((theme) => ({
  headTitle: {
    flexGrow: 1,
    display: "none",
    color: "#3170ec",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
export const Tables = ({ data }) => {
  const classes = useStyles();

  const students = useSelector((state) => state.students.result);
  const [drawer, setDrawer] = React.useState(false);
  const [cDrawer, setCDrawer] = React.useState(false);
  const [stData, setStData] = React.useState(null);
  const [cData, setCData] = React.useState("");
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const columns = [
    {
      title: "College Name",
      dataIndex: "_id",
      fixed: "left",

      render: (text) => (
        <a
          onClick={() => {
            setCData(text);
            setCDrawer(true);
          }}
        >
          {data.data.map((item) => {
            return item._id === text ? item.name : null;
          })}
        </a>
      ),
    },
    {
      title: "Country",
      dataIndex: "country",
    },

    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Year Founded",
      dataIndex: "yearFounded",
      render: (date1) => {
        return (
          <Tag key={date1} color={"blue"}>
            {new Date(date1).toDateString()}
          </Tag>
        );
      },
    },
    {
      title: "Students",
      fixed: "right",
      dataIndex: "_id",
      render: (_id) => (
        <span>
          {students.map((item) => {
            if (item.collegeId === _id) {
              let color = item.name.length > 12 ? "geekblue" : "green";

              return (
                <Tag
                  key={item._id}
                  color={color}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStData(item);
                    setDrawer(true);
                  }}
                >
                  {item.name.toUpperCase()}
                </Tag>
              );
            }

            return "";
          })}
        </span>
      ),
    },
  ];
  return (
    <div>
      <Divider />
      <Table
        loading={ !data? true: false }
        columns={columns}
        dataSource={data?data.data:null}
        pagination={{ pageSize: 20 }}
        scroll={{ x: 800, y: 400 }}
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <Text strong type="secondary">
                {" "}
                {data.state
                  ? data.state.toUpperCase() +
                    ` state has ` +
                    data.count +
                    `  number of colleges  `
                  : data.course.toUpperCase() +
                    ` course has ` +
                    data.count +
                    `  number of colleges  `}
              </Text>
            </div>

            <div
              style={{ flex: 1, flexDirection: "row-reverse", display: "flex" }}
            >
              <CSVLink data={data.data}>
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size={"sm"}
                >
                  Export
                </Button>
              </CSVLink>
            </div>
          </div>
        )}
      />
      <Drawer
        width={480}
        placement="right"
        closable={false}
        onClose={() => setDrawer(false)}
        visible={drawer}
      >
        <Row>
          <Divider />
          <Col span={24}>
            {" "}
            <Title level={5} className={classes.headTitle} type="success">
              {stData ? stData.name.toUpperCase() : null}
            </Title>{" "}
          </Col>
          <Divider />
          <Col span={12}>
            <Text strong type="secondary">
              {" "}
              Year of Batch:
            </Text>{" "}
          </Col>{" "}
          <Col span={12}>
            <Text  type="secondary">
              {" "}
              {stData
                ? new Date(stData.yearOfBatch).toLocaleDateString(
                    "en-US",
                    options
                  )
                : null}{" "}
            </Text>
          </Col>
          <Divider />
          <Col span={8}>
            {" "}
            <Text strong type="secondary">
              {" "}
              Skills:
            </Text>{" "}
          </Col>
          <Col span={16}>
            {" "}
            {stData
              ? stData.skills.map((item) => {
                  let color = item.length > 5 ? "geekblue" : "green";

                  return (
                    <Tag
                      key={item}
                      color={color}
                      style={{ cursor: "pointer", marginBottom: 5 }}
                    >
                      {item.toUpperCase()}
                    </Tag>
                  );
                })
              : null}
          </Col>
        </Row>
      </Drawer>
      <Drawer
        width={480}
        placement="left"
        closable={false}
        onClose={() => setCDrawer(false)}
        visible={cDrawer}
      >
        <Row>
          <Divider />
          {data.data.map((item) => {
            return item._id === cData ? (
              <>
                <Col span={24}>
                  {" "}
                  <Title level={5} className={classes.headTitle} type="danger">
                    {item ? item.name.toUpperCase() + ` 's College` : null}
                  </Title>{" "}
                </Col>
                <Divider />
                <Col span={12}>
                  <Text strong type="secondary">
                    {" "}
                    Year of Foundation:
                  </Text>{" "}
                </Col>{" "}
                <Col span={12}>
                  <Text  type="secondary">
                    {" "}
                    {item
                      ? new Date(item.yearFounded).toLocaleDateString(
                          "en-US",
                          options
                        )
                      : null}{" "}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text strong type="secondary">
                    {" "}
                    Country:
                  </Text>{" "}
                </Col>{" "}
                <Col span={12}>
                  <Text  type="secondary">
                    {" "}
                    {item ? item.country.toUpperCase() : null}{" "}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text strong type="secondary">
                    {" "}
                    State:
                  </Text>{" "}
                </Col>{" "}
                <Col span={12}>
                  <Text  type="secondary">
                    {item ? item.state.toUpperCase() : null}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text strong type="secondary">
                    {" "}
                    City:
                  </Text>{" "}
                </Col>{" "}
                <Col span={12}>
                  {" "}
                  <Text  type="secondary">
                    {item ? item.city.toUpperCase() : null}{" "}
                  </Text>
                </Col>
                <Divider />
                <Col span={8}>
                  {" "}
                  <Text strong type="secondary">
                    {" "}
                    Courses:
                  </Text>{" "}
                </Col>
                <Col span={16}>
                  {" "}
                  {item
                    ? item.courses.map((item2) => {
                        let color = item2.length > 5 ? "geekblue" : "green";

                        return (
                          <Tag
                            key={item2}
                            color={color}
                            style={{ marginBottom: 5 }}
                          >
                            {item2.toUpperCase()}
                          </Tag>
                        );
                      })
                    : null}
                </Col>
                <Divider />
                <Col span={8}>
                  {" "}
                  <Text strong type="secondary">
                    {" "}
                    Students:
                  </Text>{" "}
                </Col>
                <Col span={16}>
                  <span>
                    {students.map((item2) => {
                      if (item2.collegeId === item._id) {
                        let color =
                          item2.name.length > 12 ? "geekblue" : "green";

                        return (
                          <Tag
                            key={item2._id}
                            color={color}
                            style={{ cursor: "pointer", marginBottom: 5 }}
                            onClick={() => {
                              setStData(item2);
                              setDrawer(true);
                            }}
                          >
                            {item2.name.toUpperCase()}
                          </Tag>
                        );
                      }

                      return "";
                    })}
                  </span>
                </Col>
                <Divider />
                <Col span={8}>
                  {" "}
                  <Text strong type="secondary">
                    {" "}
                    Similar Colleges:
                  </Text>{" "}
                </Col>
                <Col span={16}>
                  <span>
                    {data.data.map((item3) => {
                      return item3._id !== cData ? (
                        <>
                          <Tag
                            color="blue"
                            key={item3._id}
                            style={{ cursor: "pointer", marginBottom: 5 }}
                            onClick={() => {
                              setCData(item3._id);
                            }}
                          >
                            <Link key={item3._id} underline>
                              {item3.name.toUpperCase()}
                            </Link>
                          </Tag>
                        </>
                      ) : (
                        ``
                      );
                    })}
                  </span>
                </Col>
              </>
            ) : (
              ``
            );
          })}
        </Row>
      </Drawer>
    </div>
  );
};

Tables.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
