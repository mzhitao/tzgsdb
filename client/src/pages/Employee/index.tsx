import React, { useEffect, useState } from 'react';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { EmployeeType } from '@/@types/employee';

const EmployeeList: React.FC = () => {
  const [data, setData] = useState<EmployeeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 获取员工数据
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/employees');
        const result = await response.json();
        console.log(result);
        
        setData(result.employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // 定义列的配置，只包含指定字段
  const columns:ProColumns<EmployeeType>[] = [
    {
      title: '用户名',
      dataIndex: 'username',
      valueType: 'text',
    },
    {
      title: '级别',
      dataIndex: 'level',
      valueType: 'text',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      valueType: 'text',
    },
    {
      title: '部门',
      dataIndex: 'partment',
      valueType: 'text',
    },
  ];

  return (
    <PageContainer>
      <ProTable<EmployeeType>
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
        search={false} // 如果不需要搜索框，可以禁用
        pagination={{
          pageSize: 10,  // 每页显示条数
        }}
        options={{
          density: true,
          fullScreen: true,
          reload: true,
        }}
      />
    </PageContainer>
  );
};

export default EmployeeList;
