import { Button, Input } from 'antd'
import React from 'react'
import {
    SearchOutlined
} from '@ant-design/icons'

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton, variant, backgroundColorInput, colorButton } = props
    return (
        <div style={{ display: 'flex' }}>
            <Input
                size={size}
                placeholder={placeholder}
                variant={variant}
                style={{
                    backgroundColor: backgroundColorInput,
                    borderRadius: 0
                }}
            />
            <Button
                size={size}
                icon={< SearchOutlined />}
                style={{
                    color: colorButton,
                    borderRadius: 0,
                    border: 'none'
                }}
            >
                {textButton}
            </Button>
        </div>
    )
}

export default ButtonInputSearch