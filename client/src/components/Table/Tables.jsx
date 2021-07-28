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
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import {CSVLink, CSVDownload} from 'react-csv';

import "antd/dist/antd.css";
const { Text, Link, Title } = Typography;

export const Tables = ({ data }) => {
  const students = useSelector((state) => state.students.result);
  const [drawer, setDrawer] = React.useState(false);
  const [stData, setStData] = React.useState(null);
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const columns = [
    {
      title: "#",
      dataIndex: "_id",
      fixed: true,

      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      fixed: true,

      render: (text) => <a>{text}</a>,
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
      render: (date1) =>{
        return (
          <Tag
            key={date1}
            color={'blue'}          
          >
            { new Date(date1).toDateString()}
          </Tag>
        );
      }
    },
    {
      title: "Students",
      fixed: true,
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
            /* let color = item.name.length > 6 ? "geekblue" : "green";

            return (
              <Tag color={color} key={item._id}>
                {item.name.toUpperCase()}
              </Tag>
            ); */
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
        columns={columns}
        dataSource={data.data}
        pagination={{ pageSize: 20 }}
        scroll={{ x: 800, y: 400 }}
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <Text strong>
                {" "}
                {data.state
                  ? data.state.toUpperCase()
                  : data.course.toUpperCase()}
              </Text>
            </div>

            <div
              style={{ flex: 1, flexDirection: "row-reverse", display: "flex" }}
            >
              <CSVLink data={data.data} >
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
        <Divider />

        <Row>
        <Divider/>
          <Col span={24}>
            {" "}
            <Title level={3}>
              {stData ? stData.name.toUpperCase() : null}
            </Title>{" "}
          </Col>
          <Divider/>
          <Col span={12}>
            <Text strong> Year of Batch:</Text>{" "}
          </Col>{" "}
          <Col span={12}>
            {" "}
            {stData
              ? new Date (stData.yearOfBatch).toLocaleDateString("en-US", options)
              : null}{" "}
          </Col>
          <Divider/>
          <Col span={8}>
            {" "}
            <Text strong> Skills:</Text>{" "}
          </Col>
          <Col span={16}>
            {" "}
            {stData
              ? stData.skills.map((item) => {
                  let color = item.length > 5 ? "geekblue" : "green";

                  return (
                    <Tag key={item} color={color} style={{ cursor: "pointer" }}>
                      {item.toUpperCase()}
                    </Tag>
                  );
                })
              : null}
          </Col>
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
